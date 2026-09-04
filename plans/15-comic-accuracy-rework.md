# Plan: comic-accuracy rework — prep for Campaign Randomizer (ponytail pass)

Scope: only what plan 14's `build-mu-relations.js` needs to actually import from
`tools/comic-accuracy/relations.js`. Not a redesign of the tool.

## The ladder

**1. Build at all?** Barely. `relations.js` already contains everything needed
(`resolveName`, `sharedComics`, `modernSharedComics`, `loadData`, `loadModernData`) — it
just isn't *usable* from another script yet, for one concrete reason below. Fix that one
thing, touch nothing else.

**2. Already exists — reuse it, don't rebuild it:**

| Need (for `build-mu-relations.js`) | Already in `relations.js` |
|---|---|
| Load legacy dataset | `loadData()` |
| Load modern dataset (or `null` if unbuilt) | `loadModernData()` |
| MU display name → dataset key, with alias/fuzzy/compact matching | `resolveName(query, data)` |
| Legacy shared-comics count for a resolved pair | `sharedComics(data, a, b)` |
| Modern shared-comics count for a resolved pair | `modernSharedComics(modern, a, b)` |

None of this needs to be rewritten, wrapped, or re-derived. The only actual gap:

## 3. The one real blocker

`relations.js` has **zero `export` statements** — everything is module-scope only —
*and* it calls `main().catch(...)` unconditionally at the bottom of the file with no
entry-point guard. `main()` reads `process.argv`, may `console.log` usage text, and can
call `process.exit(1)`.

Concretely: `import { resolveName } from './relations.js'` from `build-mu-relations.js`
would immediately run the CLI's `main()` as a side effect of the import — parsing the
*wrong* script's argv, printing "Usage: node relations.js …", and potentially exiting
the importing process. This is the thing that actually has to change; everything else
in the tool is fine as-is.

## 4/5. stdlib / already-installed — no new dependency

`node:url`'s `pathToFileURL` (same module `fileURLToPath` is already imported from)
gives the standard, cross-platform-correct "am I the entry point" check. Plain string
comparison of `import.meta.url` vs `process.argv[1]` breaks on Windows (`file:///C:/...`
vs `C:\...` — different separators, never equal) — this is a case where the "same size,
pick the correct one" rule applies, not a place to cut a corner.

## 6/7. Minimum diff

```diff
- import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
- import { fileURLToPath } from 'node:url';
+ import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
+ import { fileURLToPath, pathToFileURL } from 'node:url';
```

```diff
- function normalise(name) {
+ export function normalise(name) {
```
(only where `build-mu-relations.js` needs it directly or transitively — in practice:
`export` added to `loadData`, `loadModernData`, `resolveName`, `sharedComics`,
`modernSharedComics`. `normalise`/`compact` stay private unless a caller needs them
directly.)

```diff
- main().catch((err) => { console.error(err.message ?? err); process.exit(1); });
+ const isDirectRun = import.meta.url === pathToFileURL(process.argv[1]).href;
+ if (isDirectRun) {
+   main().catch((err) => { console.error(err.message ?? err); process.exit(1); });
+ }
```

That's the entire rework: one import added, five `export` keywords, one guard around
the existing `main()` call. `node relations.js "Iron Man"` behaves identically to today
— the guard only changes what happens on `import`, not on direct execution.

## What stays untouched

`build.js`, `build-modern-comicvine.js`, `generate-groups.js`, `cv-ids.json`,
`package.json` scripts, `loadLoyalty()`/villain-set fetching, all CLI printing/parsing.
None of it is needed to expose the five functions above, so none of it is touched —
deletion/no-touch over addition.

## Required check (no framework, matches plan 14's precedent)

One assert-based smoke check that the actual blocker is fixed — importing the module
must not execute the CLI:

```js
// tools/comic-accuracy/relations.import-safety.selfcheck.mjs
import assert from 'node:assert'
// dynamic-import relations.js and assert process.exitCode/stdout show no CLI usage
// output was triggered as a side effect of the import
```

Run with `node tools/comic-accuracy/relations.import-safety.selfcheck.mjs`.

## Non-goals

- Splitting `relations.js` into multiple modules
- Rewriting matching/fuzzy-lookup logic
- Adding `build-mu-relations.js` itself (that's plan 14's item, depends on this)
- Any change to CLI output, flags, or exit codes for direct `node relations.js` usage
