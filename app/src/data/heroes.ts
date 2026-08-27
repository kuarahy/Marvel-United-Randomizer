import type { Character } from '../types'

export const heroes: Character[] = [
  // ── Marvel United Core Box (Avengers) ───────────────────────────────────
  { id: 'iron-man',            name: 'Iron Man',           role: 'hero',      expansionId: 'avengers-core' },
  { id: 'captain-america',     name: 'Captain America',    role: 'hero',      expansionId: 'avengers-core' },
  { id: 'black-widow',         name: 'Black Widow',        role: 'hero',      expansionId: 'avengers-core' },
  { id: 'hulk',                name: 'Hulk',               role: 'hero',      expansionId: 'avengers-core' },
  { id: 'captain-marvel',      name: 'Captain Marvel',     role: 'hero',      expansionId: 'avengers-core' },
  { id: 'ant-man',             name: 'Ant-Man',            role: 'hero',      expansionId: 'avengers-core' },
  { id: 'wasp',                name: 'Wasp',               role: 'hero',      expansionId: 'avengers-core' },

  // ── X-Men Core Box ───────────────────────────────────────────────────────
  { id: 'professor-x',         name: 'Professor X',        role: 'hero',      expansionId: 'xmen-core' },
  { id: 'beast',               name: 'Beast',              role: 'hero',      expansionId: 'xmen-core' },
  { id: 'cyclops',             name: 'Cyclops',            role: 'hero',      expansionId: 'xmen-core' },
  { id: 'jean-grey',           name: 'Jean Grey',          role: 'hero',      expansionId: 'xmen-core' },
  { id: 'wolverine',           name: 'Wolverine',          role: 'hero',      expansionId: 'xmen-core' },
  { id: 'storm',               name: 'Storm',              role: 'hero',      expansionId: 'xmen-core' },
  { id: 'mohawk-storm',        name: 'Storm (Mohawk)',     role: 'hero',      expansionId: 'xmen-core', ksExclusive: true },
  { id: 'old-man-logan',       name: 'Old Man Logan',      role: 'hero',      expansionId: 'xmen-core', ksExclusive: true },
  { id: 'mystique',            name: 'Mystique',           role: 'anti-hero', expansionId: 'xmen-core' },
  { id: 'magneto',             name: 'Magneto',            role: 'anti-hero', expansionId: 'xmen-core' },
  
  // ── Spider-Geddon Core Box ───────────────────────────────────────────────
  { id: 'peni-parker',         name: 'Peni Parker',        role: 'hero',      expansionId: 'spider-geddon' },
  { id: 'scarlet-spider',      name: 'Scarlet Spider',     role: 'hero',      expansionId: 'spider-geddon' },
  { id: 'silk',                name: 'Silk',               role: 'hero',      expansionId: 'spider-geddon' },
  { id: 'spider-man-noir',     name: 'Spider-Man Noir',    role: 'hero',      expansionId: 'spider-geddon' },
  { id: 'spider-punk',         name: 'Spider-Punk',        role: 'hero',      expansionId: 'spider-geddon' },
  { id: 'symbiote-spider-man', name: 'Symbiote Spider-Man',role: 'hero',      expansionId: 'spider-geddon' },
  { id: 'anti-venom',          name: 'Anti-Venom',         role: 'anti-hero', expansionId: 'spider-geddon' },
  { id: 'superior-spider-man', name: 'Superior Spider-Man',role: 'anti-hero', expansionId: 'spider-geddon' },

  // ── Multiverse Core Box ──────────────────────────────────────────────────
  { id: 'captain-carter',      name: 'Captain Carter',     role: 'hero',      expansionId: 'multiverse-core' },
  { id: 'loki',                name: 'Loki',               role: 'hero',      expansionId: 'multiverse-core' },
  { id: 'black-panther-shuri', name: 'Black Panther (Shuri)', role: 'hero',   expansionId: 'multiverse-core' },
  { id: 'mighty-thor',         name: 'Mighty Thor',        role: 'hero',      expansionId: 'multiverse-core' },
  { id: 'ironheart',           name: 'Ironheart',          role: 'hero',      expansionId: 'multiverse-core' },
  { id: 'cosmic-ghost-rider',  name: 'Cosmic Ghost Rider', role: 'anti-hero', expansionId: 'multiverse-core' },
  { id: 'spider-man-2099',     name: 'Spider-Man 2099',    role: 'hero',      expansionId: 'multiverse-core' },

  // ── Enter the Spider-Verse ───────────────────────────────────────────────
  { id: 'spider-man',          name: 'Spider-Man',         role: 'hero',      expansionId: 'spider-verse' },
  { id: 'miles-morales',       name: 'Miles Morales',      role: 'hero',      expansionId: 'spider-verse' },
  { id: 'ghost-spider',        name: 'Ghost-Spider',       role: 'hero',      expansionId: 'spider-verse' },
  { id: 'spider-ham',          name: 'Spider-Ham',         role: 'hero',      expansionId: 'spider-verse', ksExclusive: true },

  // ── Tales of Asgard ──────────────────────────────────────────────────────
  { id: 'thor',                name: 'Thor',               role: 'hero',      expansionId: 'tales-of-asgard' },
  { id: 'beta-ray-bill',       name: 'Beta Ray Bill',      role: 'hero',      expansionId: 'tales-of-asgard', ksExclusive: true },
  { id: 'korg',                name: 'Korg',               role: 'hero',      expansionId: 'tales-of-asgard' },
  { id: 'valkyrie',            name: 'Valkyrie',           role: 'hero',      expansionId: 'tales-of-asgard' },

  // ── Guardians of the Galaxy ──────────────────────────────────────────────
  { id: 'star-lord',           name: 'Star-Lord',          role: 'hero',      expansionId: 'guardians' },
  { id: 'gamora',              name: 'Gamora',             role: 'hero',      expansionId: 'guardians', ksExclusive: true },
  { id: 'groot',               name: 'Groot',              role: 'hero',      expansionId: 'guardians' },
  { id: 'rocket',              name: 'Rocket',             role: 'hero',      expansionId: 'guardians' },
  { id: 'yondu',               name: 'Yondu',              role: 'hero',      expansionId: 'season-1-stretch-goals' },


  // ── Season 1 Stretch Goals (street-level heroes) ─────────────────────────
  { id: 'daredevil',           name: 'Daredevil',          role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'luke-cage',           name: 'Luke Cage',          role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'iron-fist',           name: 'Iron Fist',          role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'jessica-jones',       name: 'Jessica Jones',      role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'elektra',             name: 'Elektra',            role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'blade',               name: 'Blade',              role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'moon-knight',         name: 'Moon Knight',        role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'the-punisher',        name: 'The Punisher',       role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'nebula',              name: 'Nebula',             role: 'hero',      expansionId: 'season-1-stretch-goals' },
  
  // ── X-MEN: The Horsemen of Apocalypse ───────────────────────────────────
  // (Apocalypse is listed as anti-hero in the DB — he's a playable hero in this expansion)
  { id: 'apocalypse',          name: 'Apocalypse',         role: 'anti-hero', expansionId: 'horsemen' },

  // ── X-Men Blue Team ──────────────────────────────────────────────────────
  { id: 'banshee',             name: 'Banshee',            role: 'hero',      expansionId: 'xmen-blue', ksExclusive: true },
  { id: 'psylocke',            name: 'Psylocke',           role: 'hero',      expansionId: 'xmen-blue' },
  { id: 'jubilee',             name: 'Jubilee',            role: 'hero',      expansionId: 'xmen-blue' },
  { id: 'rogue',               name: 'Rogue',              role: 'hero',      expansionId: 'xmen-blue' },
  { id: 'gambit',              name: 'Gambit',             role: 'hero',      expansionId: 'xmen-blue' },

  // ── X-Men Gold Team ──────────────────────────────────────────────────────
  { id: 'archangel',           name: 'Archangel',          role: 'hero',      expansionId: 'xmen-gold' },
  { id: 'bishop',              name: 'Bishop',             role: 'hero',      expansionId: 'xmen-gold' },
  { id: 'colossus',            name: 'Colossus',           role: 'hero',      expansionId: 'xmen-gold' },
  { id: 'iceman',              name: 'Iceman',             role: 'hero',      expansionId: 'xmen-gold' },
  { id: 'forge',               name: 'Forge',              role: 'hero',      expansionId: 'xmen-gold', ksExclusive: true },

  // ── Deadpool ─────────────────────────────────────────────────────────────
  { id: 'deadpool',            name: 'Deadpool',           role: 'hero',      expansionId: 'deadpool' },
  { id: 'lady-deadpool',       name: 'Lady Deadpool',      role: 'hero',      expansionId: 'deadpool', ksExclusive: true },
  { id: 'bob-agent-of-hydra',  name: 'Bob, Agent of Hydra',role: 'anti-hero', expansionId: 'deadpool' },

  // ── Rise of the Black Panther ────────────────────────────────────────────
  { id: 'black-panther',       name: 'Black Panther',      role: 'hero',      expansionId: 'black-panther' },
  { id: 'winter-soldier',      name: 'Winter Soldier',     role: 'hero',      expansionId: 'black-panther' },
  { id: 'shuri',               name: 'Shuri',              role: 'hero',      expansionId: 'black-panther' },

  // ── Civil War ────────────────────────────────────────────────────────────
  { id: 'cap-classic',         name: 'Captain America (Classic)', role: 'hero', expansionId: 'civil-war' },
  { id: 'iron-man-civil-war',  name: 'Iron Man (Civil War)', role: 'hero',    expansionId: 'civil-war' },
  { id: 'iron-spider',         name: 'Iron Spider',        role: 'hero',      expansionId: 'civil-war', ksExclusive: true },
  { id: 'hulkling',            name: 'Hulkling',           role: 'hero',      expansionId: 'civil-war', ksExclusive: true },
  { id: 'goliath',             name: 'Goliath',            role: 'hero',      expansionId: 'civil-war' },
  { id: 'kate-bishop',         name: 'Kate Bishop',        role: 'hero',      expansionId: 'civil-war' },
  { id: 'spectrum',            name: 'Spectrum',           role: 'hero',      expansionId: 'civil-war' },
  { id: 'tigra',               name: 'Tigra',              role: 'hero',      expansionId: 'civil-war' },
  { id: 'wonder-man',          name: 'Wonder Man',         role: 'hero',      expansionId: 'civil-war' },
  { id: 'yellow-jacket',       name: 'Yellow Jacket',      role: 'hero',      expansionId: 'civil-war' },

  // ── Phoenix Five ─────────────────────────────────────────────────────────
  { id: 'hope-summers',        name: 'Hope Summers',       role: 'hero',      expansionId: 'phoenix-five' },

  // ── X-Force ──────────────────────────────────────────────────────────────
  { id: 'domino',              name: 'Domino',             role: 'hero',      expansionId: 'x-force' },
  { id: 'cannonball',          name: 'Cannonball',         role: 'hero',      expansionId: 'x-force' },
  { id: 'shatterstar',         name: 'Shatterstar',        role: 'hero',      expansionId: 'x-force' },
  { id: 'cable',               name: 'Cable',              role: 'hero',      expansionId: 'x-force' },

  // ── Days of Future Past ──────────────────────────────────────────────────
  { id: 'logan',               name: 'Logan',              role: 'hero',      expansionId: 'days-of-future-past' },

  // ── X-Men: First Class ───────────────────────────────────────────────────
  { id: 'angel-first-class',   name: 'Angel (First Class)', role: 'hero',     expansionId: 'first-class' },
  { id: 'beast-first-class',   name: 'Beast (First Class)', role: 'hero',     expansionId: 'first-class' },
  { id: 'cyclops-first-class', name: 'Cyclops (First Class)', role: 'hero',   expansionId: 'first-class' },
  { id: 'iceman-first-class',  name: 'Iceman (First Class)', role: 'hero',    expansionId: 'first-class' },
  { id: 'marvel-girl',         name: 'Marvel Girl',        role: 'hero',      expansionId: 'first-class' },

  // ── Fantastic Four ───────────────────────────────────────────────────────
  { id: 'human-torch',         name: 'Human Torch',        role: 'hero',      expansionId: 'fantastic-four' },
  { id: 'invisible-woman',     name: 'Invisible Woman',    role: 'hero',      expansionId: 'fantastic-four' },
  { id: 'mister-fantastic',    name: 'Mister Fantastic',   role: 'hero',      expansionId: 'fantastic-four' },
  { id: 'the-thing',           name: 'The Thing',          role: 'hero',      expansionId: 'fantastic-four' },
  { id: 'doctor-doom',         name: 'Doctor Doom',        role: 'anti-hero', expansionId: 'fantastic-four' },
  { id: 'silver-surfer',       name: 'Silver Surfer',      role: 'hero',      expansionId: 'fantastic-four' },

  // ── Maximum Carnage ──────────────────────────────────────────────────────
  { id: 'morbius',             name: 'Morbius',            role: 'anti-hero', expansionId: 'maximum-carnage' },

  // ── World War Hulk ───────────────────────────────────────────────────────
  { id: 'ares',                name: 'Ares',               role: 'anti-hero', expansionId: 'world-war-hulk' },
  { id: 'doc-samson',          name: 'Doc Samson',         role: 'hero',      expansionId: 'world-war-hulk', ksExclusive: true },
  { id: 'gladiator-hulk',      name: 'Gladiator Hulk',     role: 'anti-hero', expansionId: 'world-war-hulk' },
  { id: 'hercules',            name: 'Hercules',           role: 'hero',      expansionId: 'world-war-hulk' },
  { id: 'hulkbuster-iron-man', name: 'Hulkbuster Iron Man',role: 'hero',      expansionId: 'world-war-hulk' },
  { id: 'sentry',              name: 'Sentry',             role: 'anti-hero', expansionId: 'world-war-hulk' },

  // ── Witching Hour ────────────────────────────────────────────────────────
  { id: 'agatha-harkness',     name: 'Agatha Harkness',    role: 'anti-hero', expansionId: 'witching-hour' },
  { id: 'deadpool-x-force',    name: 'Deadpool (X-Force)', role: 'hero',      expansionId: 'witching-hour' },
  { id: 'grey-hulk',           name: 'Grey-Hulk',          role: 'anti-hero', expansionId: 'witching-hour' },
  { id: 'mister-sinister-hero',name: 'Mister Sinister',    role: 'anti-hero', expansionId: 'witching-hour' },
  { id: 'juggernaut',          name: 'Juggernaut',         role: 'anti-hero', expansionId: 'witching-hour' },

  // ── Pet Companions ───────────────────────────────────────────────────────
  { id: 'lockheed',            name: 'Lockheed',           role: 'hero',      expansionId: 'pet-companions' },
  { id: 'alligator-loki',      name: 'Alligator Loki',     role: 'hero',      expansionId: 'pet-companions' },
  { id: 'cosmo',               name: 'Cosmo',              role: 'hero',      expansionId: 'pet-companions' },
  { id: 'goose',               name: 'Goose',              role: 'hero',      expansionId: 'pet-companions' },
  { id: 'jeffrey',             name: 'Jeffrey',            role: 'hero',      expansionId: 'pet-companions' },
  { id: 'redwing',             name: 'Redwing',            role: 'hero',      expansionId: 'pet-companions' },
  { id: 'throg',               name: 'Throg',              role: 'hero',      expansionId: 'pet-companions' },

  // ── Secret Invasion ──────────────────────────────────────────────────────
  { id: 'maria-hill',          name: 'Maria Hill',         role: 'hero',      expansionId: 'secret-invasion' },
  { id: 'nick-fury-sr',        name: 'Nick Fury, Sr.',     role: 'hero',      expansionId: 'secret-invasion' },
  { id: 'quake',               name: 'Quake',              role: 'hero',      expansionId: 'secret-invasion' },
  { id: 'ronin',               name: 'Ronin',              role: 'hero',      expansionId: 'secret-invasion' },

  // ── War of Kings ─────────────────────────────────────────────────────────
  { id: 'black-bolt',          name: 'Black Bolt',         role: 'hero',      expansionId: 'war-of-kings' },
  { id: 'crystal',             name: 'Crystal',            role: 'hero',      expansionId: 'war-of-kings' },
  { id: 'gorgon',              name: 'Gorgon',             role: 'hero',      expansionId: 'war-of-kings' },
  { id: 'karnak',              name: 'Karnak',             role: 'hero',      expansionId: 'war-of-kings' },
  { id: 'lockjaw',             name: 'Lockjaw',            role: 'hero',      expansionId: 'war-of-kings' },
  { id: 'medusa',              name: 'Medusa',             role: 'hero',      expansionId: 'war-of-kings' },
  { id: 'triton',              name: 'Triton',             role: 'hero',      expansionId: 'war-of-kings' },
  { id: 'gladiator',           name: 'Gladiator',          role: 'anti-hero', expansionId: 'war-of-kings' },

  // ── X-Men: The Age of Apocalypse ─────────────────────────────────────────
  { id: 'magneto-aoa',         name: 'Magneto (Age of Apocalypse)', role: 'hero', expansionId: 'age-of-apocalypse' },
  { id: 'morph',               name: 'Morph',              role: 'hero',      expansionId: 'age-of-apocalypse' },
  { id: 'sabretooth-wildchild', name: 'Sabretooth & Wildchild', role: 'hero', expansionId: 'age-of-apocalypse' },
  { id: 'x-man',               name: 'X-Man',              role: 'hero',      expansionId: 'age-of-apocalypse' },

  // ── Annihilation ─────────────────────────────────────────────────────────
  { id: 'moondragon',          name: 'Moondragon',         role: 'hero',      expansionId: 'annihilation' },
  { id: 'nova-prime',          name: 'Nova Prime',         role: 'hero',      expansionId: 'annihilation' },
  { id: 'phyla-vell',          name: 'Phyla-Vell',         role: 'hero',      expansionId: 'annihilation' },
  { id: 'quasar',              name: 'Quasar',             role: 'hero',      expansionId: 'annihilation' },

  // ── The Coming of Galactus ─────────────────────────────────────────────────
  { id: 'nova-frankie-raye',   name: 'Nova (Frankie Raye)', role: 'hero',     expansionId: 'the-coming-of-galactus' },
  { id: 'iron-lad',            name: 'Iron Lad',           role: 'hero',      expansionId: 'the-coming-of-galactus', ksExclusive: true },

  // ── Season 3 Stretch Goals ───────────────────────────────────────────────
  { id: 'agent-venom',         name: 'Agent Venom',        role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'aurora',              name: 'Aurora',             role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'black-knight',        name: 'Black Knight',       role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'chamber',             name: 'Chamber',            role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'chod',                name: "Ch'od",              role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'corsair',             name: 'Corsair',            role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'cyborg-spider-man',   name: 'Cyborg Spider-Man',  role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'cypher',              name: 'Cypher',             role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'daken',               name: 'Daken',              role: 'anti-hero', expansionId: 'season-3-stretch-goals' },
  { id: 'darkchild',           name: 'Darkchild',          role: 'anti-hero', expansionId: 'season-3-stretch-goals' },
  { id: 'deathlok',            name: 'Deathlok',           role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'elsa-bloodstone',     name: 'Elsa Bloodstone',    role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'hepzibah',            name: 'Hepzibah',           role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'husk',                name: 'Husk',               role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'kid-loki',            name: 'Kid Loki',           role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'lilandra',            name: 'Lilandra',           role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'm',                   name: 'M',                  role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'man-thing',           name: 'Man-Thing',          role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'meggan',              name: 'Meggan',             role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'moon-girl',           name: 'Moon Girl & Devil Dinosaur', role: 'hero', expansionId: 'season-3-stretch-goals' },
  { id: 'moonstone',           name: 'Moonstone',          role: 'anti-hero', expansionId: 'season-3-stretch-goals' },
  { id: 'patriot',             name: 'Patriot',            role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'raza',                name: 'Raza',               role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'red-hulk',            name: 'Red Hulk',           role: 'anti-hero', expansionId: 'season-3-stretch-goals' },
  { id: 'siryn',               name: 'Siryn',              role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'songbird',            name: 'Songbird',           role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'speed',               name: 'Speed',              role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'stature',             name: 'Stature',            role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'us-agent',            name: 'U.S. Agent',         role: 'anti-hero', expansionId: 'season-3-stretch-goals' },
  { id: 'werewolf-by-night',   name: 'Werewolf By Night',  role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'white-widow',         name: 'White Widow',        role: 'anti-hero', expansionId: 'season-3-stretch-goals' },
  { id: 'wiccan',              name: 'Wiccan',             role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'wong',                name: 'Wong',               role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'captain-britain-betsy', name: 'Captain Britain (Betsy Braddock)', role: 'hero', expansionId: 'season-3-stretch-goals' },
  { id: 'havok-xfactor',       name: 'Havok (X-Factor)',   role: 'hero',      expansionId: 'season-3-stretch-goals' },
  { id: 'captain-america-sam', name: 'Captain America (Sam Wilson)', role: 'hero', expansionId: 'season-3-stretch-goals' },
  { id: 'ghost-rider-blaze',   name: 'Ghost Rider (Johnny Blaze)', role: 'hero', expansionId: 'season-3-stretch-goals' },
  { id: 'darkstar',            name: 'Darkstar',           role: 'anti-hero', expansionId: 'season-3-stretch-goals' },
  { id: 'ursa-major',          name: 'Ursa Major',         role: 'anti-hero', expansionId: 'season-3-stretch-goals' },
  { id: 'red-guardian',        name: 'Red Guardian',       role: 'anti-hero', expansionId: 'season-3-stretch-goals' },
  
  // ── Season 1 Stretch Goals ──────────────────────────────────────────────────────────────────
  { id: 'adam-warlock',        name: 'Adam Warlock',       role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'america-chavez',      name: 'America Chavez',     role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'black-cat',           name: 'Black Cat',          role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'doctor-strange',      name: 'Doctor Strange',     role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'falcon',              name: 'Falcon',             role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'ghost-rider',         name: 'Ghost Rider',        role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'hawkeye',             name: 'Hawkeye',            role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'howard-the-duck',     name: 'Howard The Duck',    role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'mockingbird',         name: 'Mockingbird',        role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'ms-marvel',           name: 'Ms. Marvel',         role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'nick-fury',           name: 'Nick Fury',          role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'nova',                name: 'Nova',               role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'quicksilver',         name: 'Quicksilver',        role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'scarlet-witch',       name: 'Scarlet Witch',      role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'shang-chi',           name: 'Shang Chi',          role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'she-hulk',            name: 'She Hulk',           role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'spider-woman',        name: 'Spider-Woman',       role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'spider-man-2099',     name: 'Spider-Man 2099',    role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'squirrel-girl',       name: 'Squirrel Girl',      role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'vision',              name: 'Vision',             role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'war-machine',         name: 'War Machine',        role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'drax',                name: 'Drax The Destroyer', role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'mantis',              name: 'Mantis',             role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'okoye',               name: 'Okoye',              role: 'hero',      expansionId: 'season-1-stretch-goals' },
  { id: 'venom',               name: 'Venom',              role: 'anti-hero', expansionId: 'season-1-stretch-goals' },

  // ── Season 2 Stretch Goals ────────────────────────────────────────────────────────────────────
  { id: 'emma-frost',          name: 'Emma Frost',         role: 'anti-hero', expansionId: 'season-2-stretch-goals' },
  { id: 'magik',               name: 'Magik',              role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'sunspot',             name: 'Sunspot',            role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'warlock',             name: 'Warlock',            role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'mirage',              name: 'Mirage',             role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'wolfsbane',           name: 'Wolfsbane',          role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'havok',               name: 'Havok',              role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'multiple-man',        name: 'Multiple Man',       role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'polaris',             name: 'Polaris',            role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'strong-guy',          name: 'Strong Guy',         role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'boom-boom',           name: 'Boom-Boom',          role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'blink',               name: 'Blink',              role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'firestar',            name: 'Firestar',           role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'warpath',             name: 'Warpath',            role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'fantomex',            name: 'Fantomex',           role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'feral',               name: 'Feral',              role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'nightcrawler',        name: 'Nightcrawler',       role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'captain-britain',     name: 'Captain Britain',    role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'phoenix',             name: 'Phoenix',            role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'doop',                name: 'Doop',               role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'gwenpool',            name: 'Gwenpool',           role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'dagger',              name: 'Dagger',             role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'cloak',               name: 'Cloak',              role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'longshot',            name: 'Longshot',           role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'sunfire',             name: 'Sunfire',            role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'weapon-x',            name: 'Weapon X',           role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'x-23',                name: 'X-23',               role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'dazzler',             name: 'Dazzler',            role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'pixie',               name: 'Pixie',              role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'sasquatch',           name: 'Sasquatch',          role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'puck',                name: 'Puck',               role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'guardian',            name: 'Guardian',           role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'snowbird',            name: 'Snowbird',           role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'legion',              name: 'Legion',             role: 'anti-hero', expansionId: 'season-2-stretch-goals' },
  { id: 'marrow',              name: 'Marrow',             role: 'anti-hero', expansionId: 'season-2-stretch-goals' },
  { id: 'spiral',              name: 'Spiral',             role: 'anti-hero', expansionId: 'season-2-stretch-goals' },
  { id: 'namor',               name: 'Namor',              role: 'anti-hero', expansionId: 'season-2-stretch-goals' },
  { id: 'kitty-pryde',         name: 'Kitty Pryde',        role: 'hero',      expansionId: 'season-2-stretch-goals' },
  { id: 'northstar',           name: 'Northstar',          role: 'hero',      expansionId: 'season-2-stretch-goals' },
]
