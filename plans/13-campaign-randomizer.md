# Plan: Campaign Randomizer (comic-accuracy relations + ordered campaigns)

## Goal

Add a "Campaign Randomizer" mode that:

- Toggles hero/villain pairing by historical comic-book crossover accuracy, using
  [`tools/comic-accuracy`](../tools/comic-accuracy/README.md) data. OFF randomizes all sets
  (today's behavior); ON filters by configurable strictness levels of `sharedComics`.
- Offers MCU movie-order campaigns (sequence characters by MCU release order).
- Offers chronological-order campaigns (sequence characters by in-universe timeline).

## Current architecture (must be preserved)

- Strict layering: `repositories/` (raw data access, implement `IRepository<T>`) →
  `services/` (business logic) → `hooks/` (React state) → `components/` (presentation).
  See [RandomizerService.ts](../app/src/services/RandomizerService.ts),
  [useRandomizer.ts](../app/src/hooks/useRandomizer.ts).
- Existing "campaigns" ([Campaign.ts](../app/src/types/Campaign.ts)) are static markdown
  narratives rendered via `react-markdown`. This feature is additive — a *generative*
  campaign mode, not a change to that type or `CampaignService`.
- `tools/comic-accuracy` is explicitly standalone (its own README), keyed by MU display
  name (e.g. `"Iron Man"`), which already matches `Character.name` in
  [heroes.ts](../app/src/data/heroes.ts) / `villains.ts` — no id-remapping table needed,
  match directly on `name`.

## 1. Data bridge (build-time script, not app runtime logic)

```
tools/comic-accuracy/build-mu-relations.js   # new
  reads: co-appearances.json (legacy), modern-co-appearances.json, MU roster names
  writes: app/src/data/relations/mu-relations.json
```

Merge legacy + modern pairs into one normalized, MU-name-keyed dataset so the app never
depends on the research tool's internal matching/OVERRIDES logic:

```jsonc
{
  "meta": { "generated": "...", "legacyWindow": "1961-2002", "modernWindow": "2003+" },
  "pairs": [
    { "a": "Iron Man", "b": "Spider-Man", "sharedComics": 132 }
  ]
}
```

## 2. Relation-weighted randomization (the toggle)

```ts
// app/src/types/RelationLevel.ts
export type RelationLevel = 'off' | 'loose' | 'moderate' | 'strict'
// off -> no filtering (current behavior)
// loose >= 1, moderate >= 20, strict >= 50 sharedComics
```

```ts
// app/src/repositories/RelationRepository.ts — data access only
export class RelationRepository implements IRepository<RelationPair> {
  getAll(): RelationPair[]
  getById(id: string): RelationPair | undefined   // `${a}:${b}` composite key
  getSharedComics(nameA: string, nameB: string): number  // 0 if no data
}
```

```ts
// app/src/services/RelationFilterService.ts — filtering only, ~40 lines
export class RelationFilterService {
  constructor(private readonly relationRepo: RelationRepository) {}
  filterPartners(anchor: Character, pool: Character[], level: RelationLevel): Character[]
  // falls back to the full pool when the filtered result is empty —
  // most characters have no documented crossover data, so a naive strict
  // filter must not zero out the roster (same convention as filterByOwned)
}
```

`RandomizerService` is not modified — `RelationFilterService` composes with it at the
hook layer (`useCampaignRandomizer.ts`), same pattern `useRandomizer.ts` already uses to
compose `filterByOwned` with `RandomizerService`.

## 3. MCU order / chronological order campaigns

Same shape, different ordering data — one generic service, two data files:

```ts
// app/src/data/campaignOrders/mcuOrder.ts          — character names in MCU release order
// app/src/data/campaignOrders/chronologicalOrder.ts — same, in-universe chronological order
// app/src/types/CampaignOrder.ts
export type CampaignOrderMode = 'mcu' | 'chronological'
export interface CampaignOrderEntry { characterName: string; sequence: number }
```

```ts
// app/src/repositories/CampaignOrderRepository.ts
export class CampaignOrderRepository {
  getOrder(mode: CampaignOrderMode): CampaignOrderEntry[]
}

// app/src/services/CampaignOrderService.ts — ~35 lines
export class CampaignOrderService {
  constructor(private readonly orderRepo: CampaignOrderRepository) {}
  nextInSequence(mode: CampaignOrderMode, completedNames: string[]): Character | undefined
}
```

This does not touch `CampaignService`/`Campaign` — it's a new campaign *mode*, additive
to the existing narrative-campaign feature.

## 4. UI wiring

New presentational components following the existing `CollectionFilterPanel` /
`RandomizerPanel` pattern: a relation-level toggle control and a campaign-order-mode
selector, wired through `useCampaignRandomizer`.

## SOLID mapping

- **SRP**: relation filtering, sequence ordering, and shuffling are three separate
  services; existing `ShuffleService` is reused, not duplicated.
- **OCP**: `RandomizerService` extended via composition in the hook layer, not edited.
- **ISP**: `RelationRepository` / `CampaignOrderRepository` add methods beyond
  `IRepository<T>` rather than forcing mismatched shapes into that interface (same
  precedent as `CharacterRepository.getHeroes()`/`getVillains()`).
- **DIP**: services take repositories via constructor injection, matching
  `CampaignService`/`RandomizerService` today.

## Commit plan (atomic, one concern per commit)

1. Data bridge script + generated `mu-relations.json`
2. `RelationRepository` + `RelationFilterService` + `RelationLevel` type
3. `CampaignOrderRepository` + `CampaignOrderService` + MCU/chronological data
4. `useCampaignRandomizer` hook
5. UI components + wiring into the app shell

## Non-goals

- Changing the existing static markdown `Campaign` type or `CampaignService`
- Full-universe relation graph beyond the MU roster
- Reworking `tools/comic-accuracy` itself (consumed as-is, standalone)
