# Plan: Campaign Randomizer — lean build (ponytail pass)

Same feature as [13-campaign-randomizer.md](13-campaign-randomizer.md), re-derived under
"lazy senior dev" rules: climb the YAGNI ladder before writing anything, reuse what's
already here, fewest files, no abstraction that wasn't asked for.

## The ladder

**1. Build at all?** Yes — it's an explicit roadmap item (toggle + levels, MCU order,
chronological order). Scope stays exactly that, nothing added.

**2. Already exists in this codebase — reuse it:**

| Need | Already there |
|---|---|
| Random pick from a filtered pool | `RandomizerService.rollHero/rollVillain/rollTeam` already accept an optional `pool?: Character[]` — filtering happens *before* the call, the service needs zero changes. |
| "Filter a pool, fall back to full pool if empty" | [useRandomizer.ts](../app/src/hooks/useRandomizer.ts)'s `filterByOwned` is a plain free function living in the hook file — not a class, not a repository. That's the precedent to copy, not `13`'s `RelationFilterService` class. |
| Legacy+modern name matching, pair lookup | `tools/comic-accuracy/relations.js` already does this end-to-end (OVERRIDES, fuzzy match, legacy/modern merge for a pair). Don't re-derive matching logic in a new build script — the MU-roster slim-down just needs to iterate the roster through what's already there. |
| Static ordered/curated data | `data/heroes.ts`, `data/villains.ts` are plain arrays, no wrapper class required to *have* data. |

**3. Standard library covers it:** `Array.prototype.find`/`filter`, a plain object/`Map`
keyed by a sorted `"a|b"` pair string. No date/collection library needed.

**4. Native platform feature:** n/a.

**5. Already-installed dependency:** none needed — no new npm package for either half of
this feature.

**6. One-liner opportunities:**

```ts
const sharedComics = (a: string, b: string) => relations[[a, b].sort().join('|')] ?? 0
const nextInSequence = (order: string[], completedNames: string[]) => order[completedNames.length]
```

**7. Minimum code that works** — file list below.

## What this drops from plan 13

- `RelationRepository implements IRepository<T>` — dropped. `IRepository<T>`'s
  `getAll()/getById(id)` shape doesn't fit a pair-keyed lookup (13 admitted this and
  bolted on a composite-key workaround). Forcing it in is an abstraction nobody asked
  for; a plain lookup object/function is smaller and doesn't lie about implementing an
  interface it doesn't really satisfy.
- `RelationFilterService` class — dropped, replaced by one free function next to
  `filterByOwned`, matching the file's existing style instead of introducing a new
  pattern for one function.
- `CampaignOrderRepository` + `CampaignOrderService` — dropped. Two static arrays plus
  one function (`nextInSequence`) don't need two class layers; add repository/service
  ceremony only if this grows real branching logic later.
- Adding Vitest — dropped. Two small pure functions don't justify installing a test
  framework the app has never needed. One assert-based self-check script instead (see
  below); revisit Vitest if/when enough logic accumulates to need real suites.

## Minimum file list

```
tools/comic-accuracy/build-mu-relations.js     # ~30 lines: filter existing legacy+modern
                                                # JSON down to MU-roster-only pairs, reusing
                                                # relations.js's name-matching, not re-deriving it
app/src/data/relations/mu-relations.json       # generated, committed, MU-roster only (small)
app/src/data/campaignOrders/mcuOrder.ts        # string[] of character names, MCU release order
app/src/data/campaignOrders/chronologicalOrder.ts
app/src/hooks/useCampaignRandomizer.ts         # composes RandomizerService with two free
                                                # functions (sharedComics filter, sequence step) —
                                                # same shape as useRandomizer.ts's filterByOwned
app/src/components/campaigns/CampaignRandomizerPanel.tsx  # + minimal subcomponents, RandomizerPanel style
```

Six items total vs. plan 13's five new classes plus data-bridge script plus test setup.

## Deliberate corners cut (ponytail markers, upgrade path noted)

```ts
// ponytail: naive max(legacySharedComics, modernSharedComics) merge, no recency
// weighting — revisit if strict/moderate thresholds feel wrong in practice
```

```ts
// ponytail: O(n) linear scan for pair lookup at ~130-character roster size —
// swap the plain object for a Map or index by character if the roster grows 10x
```

## The one required check (no framework)

Non-trivial logic here is the two free functions (`sharedComics` fallback-to-full-pool
behavior, `nextInSequence` end-of-campaign behavior). Ship one plain assert-based script,
no test runner:

```js
// app/src/data/relations/relations.selfcheck.mjs
import assert from 'node:assert'
// filterByRelation falls back to full pool when nothing meets the threshold
// nextInSequence returns undefined past the last entry
```

Run with `node app/src/data/relations/relations.selfcheck.mjs`. If the app later grows
enough logic to need real suites, adopt Vitest then — not preemptively for two functions.

## Non-goals (unchanged from plan 13)

- Changing the existing static markdown `Campaign` type or `CampaignService`
- Full-universe relation graph beyond the MU roster
- Reworking `tools/comic-accuracy` itself
