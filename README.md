![Board Game](https://img.shields.io/badge/Board%20Game-Marvel%20United-red?style=flat)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)

# Marvel United Randomizer

A tool that randomizes heroes, villains, and expansions for the **Marvel United** board game. It also includes two custom branching campaign systems with narrative consequences for wins and losses.

Link: https://marvel-united-randomizer.vercel.app/

---

## Features

- **Random expansion picker** – draws a random expansion from your collection
- **Random hero** – picks a single hero at random
- **Random villain** – picks a villain at random
- **Random team builder** – assembles a team of 4 heroes for a session
- **Custom campaigns** – two fully branching narrative campaigns with win/loss consequences
- **Custom scenarios** – original story prompts to set the tone for each session

---

## Expansions Supported

| Expansion |
|---|
| Enter the Spider-Verse |
| X-MEN: The Horsemen of Apocalypse |
| X-MEN Blue Team |
| X-MEN Mutant Promos |
| Deadpool |
| Rise of the Black Panther |
| Phoenix Five |
| X-Force |
| Days of Future Past |

---

## Campaigns

### [X-Men: Children of the Atom](Campaigns/X-Men%20Campaign.md)
A 4-act branching campaign starting with the original five X-Men. Losses change the story direction, add permanent handicaps, or remove heroes. Paths escalate from school-level threats to mutant extinction events.

**Required:** Marvel United: X-Men core box  
**Recommended expansions:** Days of Future Past, Phoenix Five, X-Force, Horsemen of the Apocalypse

### [Earth's Mightiest: Shadows Over New York](Campaigns/Earth's%20Mightiest%20Campaign.md)
A 4-act Avengers campaign starting at street level and escalating to cosmic threats. Features a Mermaid flowchart of all branching paths and over 9 possible victory conditions.

**Required:** Marvel United base set  
**Recommended expansions:** Spider-Man, Avengers, Guardians of the Galaxy

## 🗺️ Roadmap

- [x] Convert code to a front-end centric code that can be deployed and read directly from Vercel, or similar
- [x] Add more campaign boxes (Kickstarter Promo Box 2, The Infinity Gauntlet, Spider-Geddon)
- [x] Add images to every expansion, hero, villain, and fields
- [x] Collection filter to sort by
- [x] Add name and links social media, donation boxes, etc (no ads! :D)
- [x] Tabs for Locatios added
- [x] Filters cache
- [ ] Filter for "hero groups", e.g. Spider-Man, X-Men, Avengers, etc (would collect heroes and villains across the board to facilitate focused campaigns)
- [ ] Campaign Randomizer with [comic-accuracy](https://github.com/kuarahy/Marvel-United-Randomizer/tree/main/tools/comic-accuracy)
 - Toggle option for hero relation using comic-accuracy. OFF randomizes all sets, ON turns relation on, with multiple levels of input based on historical comic book crossover values
 - MCU movie order campaigns
 - Chronological order campaigns
- [ ] Tabs Campaigns, Scenarios, and Randomizers tab to unify both
- [ ] Release PDFs to communities with images, making it easy for people to play with
- [ ] Locations randomizer will be added for v2
- [ ] Add suggestions or automated connections to Random Scenarios using [comic-accuracy](https://github.com/kuarahy/Marvel-United-Randomizer/tree/main/tools/comic-accuracy).
- [ ] Rules to add Multiverse randomness to matches (e.g. add villain from other universes with specific triggers)
- [ ] Rules to add the Infinity Stones as powers that can be used during the campaigns
- [ ] Spider-Verse campaign book



---

## Support

If you find this useful, consider [sponsoring on GitHub](https://github.com/sponsors/kuarahy).
