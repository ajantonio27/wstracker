// ─────────────────────────────────────────────────────
//  MOCK DATA — Mobile Legends: Bang Bang
//  Squad: Maki, Dars, Burger, Jimeneaa, Xinn
// ─────────────────────────────────────────────────────

// ── ML HEROES ─────────────────────────────────────────
export const HEROES = [
  // Maki's heroes (Jungler)
  { id: 1,  name: 'Harley',    role: 'Mage/Assassin', color: '#9b59b6', icon: '🎩', games: 312, wins: 221, kda: 7.4 },
  { id: 2,  name: 'Nolan',     role: 'Assassin',      color: '#00d2ff', icon: '⚡', games: 248, wins: 172, kda: 8.1 },
  { id: 3,  name: 'Fredrinn',  role: 'Fighter/Tank',  color: '#e74c3c', icon: '🪖', games: 189, wins: 124, kda: 5.2 },

  // Dars's heroes (Gold Lane)
  { id: 4,  name: 'Irithel',   role: 'Marksman',      color: '#2ecc71', icon: '🏹', games: 276, wins: 178, kda: 6.8 },
  { id: 5,  name: 'Claude',    role: 'Marksman',      color: '#3d8bff', icon: '🐒', games: 201, wins: 130, kda: 6.1 },
  { id: 6,  name: 'Layla',     role: 'Marksman',      color: '#ffcc44', icon: '🔫', games: 144, wins: 94,  kda: 5.5 },

  // Burger's heroes (EXP Lane)
  { id: 7,  name: 'Ruby',      role: 'Fighter',       color: '#ff4757', icon: '🔴', games: 298, wins: 184, kda: 4.8 },
  { id: 8,  name: 'Sora',      role: 'Fighter',       color: '#3d8bff', icon: '⚔️', games: 187, wins: 112, kda: 4.4 },
  { id: 9,  name: 'Cici',      role: 'Fighter',       color: '#ff9f43', icon: '🎪', games: 156, wins: 91,  kda: 4.1 },

  // Jimeneaa's heroes (Mid Lane)
  { id: 10, name: 'Kadita',    role: 'Mage/Assassin', color: '#00d2ff', icon: '🌊', games: 324, wins: 218, kda: 7.9 },
  { id: 11, name: 'Lunox',     role: 'Mage',          color: '#9b59b6', icon: '🌙', games: 256, wins: 171, kda: 7.2 },
  { id: 12, name: 'Kagura',    role: 'Mage',          color: '#fd79a8', icon: '🌸', games: 198, wins: 128, kda: 6.6 },

  // Xinn's heroes (Roam)
  { id: 13, name: 'Tigreal',   role: 'Tank',          color: '#636e72', icon: '🛡️', games: 287, wins: 178, kda: 3.8 },
  { id: 14, name: 'Grock',     role: 'Tank',          color: '#795548', icon: '🪨', games: 231, wins: 143, kda: 3.4 },
  { id: 15, name: 'Estes',     role: 'Support',       color: '#2ecc71', icon: '🌿', games: 178, wins: 108, kda: 4.2 },
]

// ── RANK CONFIG ────────────────────────────────────────
export const RANK_CONFIG = {
  'warrior':           { label: 'Warrior',           color: '#94a3b8', glow: 'rgba(148,163,184,0.3)', stars: 1 },
  'elite':             { label: 'Elite',             color: '#34d399', glow: 'rgba(52,211,153,0.3)',  stars: 2 },
  'master':            { label: 'Master',            color: '#60a5fa', glow: 'rgba(96,165,250,0.3)',  stars: 3 },
  'grandmaster':       { label: 'Grandmaster',       color: '#a78bfa', glow: 'rgba(167,139,250,0.3)', stars: 4 },
  'epic':              { label: 'Epic',              color: '#f87171', glow: 'rgba(248,113,113,0.3)', stars: 5 },
  'legend':            { label: 'Legend',            color: '#f5b942', glow: 'rgba(245,185,66,0.3)',  stars: 6 },
  'mythic':            { label: 'Mythic',            color: '#fb923c', glow: 'rgba(251,146,60,0.3)',  stars: 7 },
  'mythical-honor':    { label: 'Mythical Honor',    color: '#e879f9', glow: 'rgba(232,121,249,0.35)', stars: 8 },
  'mythical-glory':    { label: 'Mythical Glory',    color: '#4f8ef7', glow: 'rgba(79,142,247,0.4)', stars: 9 },
  'mythical-immortal': { label: 'Mythical Immortal', color: '#f5b942', glow: 'rgba(245,185,66,0.5)', stars: 10 },
}

// ── ROLE COLORS ────────────────────────────────────────
export const ROLE_COLORS = {
  'Jungler':   '#a78bfa',
  'Gold Lane': '#f5b942',
  'Exp Lane':  '#34d399',
  'Mid Lane':  '#f87171',
  'Roam':      '#60a5fa',
}

// ── PLAYERS ────────────────────────────────────────────
export const PLAYERS = [
  {
    id: 1,
    username: 'Maki',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Maki777&backgroundColor=0d1117',
    rank: 'Mythical Immortal',
    rankTier: 'mythical-immortal',
    rankPoints: 4218,
    server: 'Philippines',
    team: null,
    role: 'Jungler',
    winRate: 66.8,
    totalGames: 1124,
    wins: 751,
    losses: 373,
    mvpCount: 298,
    kda: 6.4,
    avgKills: 9.1,
    avgDeaths: 2.3,
    avgAssists: 8.6,
    favoriteHeroes: [1, 2, 3],
    bio: 'Jungler main. Harley one-trick turned multi-hero carry. Early game domination is the only strat.',
  },
  {
    id: 2,
    username: 'Dars',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Dars999&backgroundColor=0d1117',
    rank: 'Mythical Immortal',
    rankTier: 'mythical-immortal',
    rankPoints: 3976,
    server: 'Philippines',
    team: null,
    role: 'Gold Lane',
    winRate: 63.4,
    totalGames: 987,
    wins: 626,
    losses: 361,
    mvpCount: 241,
    kda: 5.9,
    avgKills: 8.4,
    avgDeaths: 2.6,
    avgAssists: 7.0,
    favoriteHeroes: [4, 5, 6],
    bio: 'Gold lane carry. Irithel is life. Late game hyper carry who always delivers when it matters.',
  },
  {
    id: 3,
    username: 'Burger',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Burger420&backgroundColor=0d1117',
    rank: 'Mythical Immortal',
    rankTier: 'mythical-immortal',
    rankPoints: 3841,
    server: 'Philippines',
    team: null,
    role: 'Exp Lane',
    winRate: 61.7,
    totalGames: 1056,
    wins: 652,
    losses: 404,
    mvpCount: 204,
    kda: 4.7,
    avgKills: 7.2,
    avgDeaths: 2.9,
    avgAssists: 9.4,
    favoriteHeroes: [7, 8, 9],
    bio: 'Ruby enjoyer. Exp lane bully who loves making life miserable for enemy laners since Season 18.',
  },
  {
    id: 4,
    username: 'Jimeneaa',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Jimeneaa88&backgroundColor=0d1117',
    rank: 'Mythical Immortal',
    rankTier: 'mythical-immortal',
    rankPoints: 4102,
    server: 'Philippines',
    team: null,
    role: 'Mid Lane',
    winRate: 67.2,
    totalGames: 934,
    wins: 628,
    losses: 306,
    mvpCount: 287,
    kda: 7.1,
    avgKills: 9.8,
    avgDeaths: 2.1,
    avgAssists: 7.8,
    favoriteHeroes: [10, 11, 12],
    bio: 'Mid lane burst mage. Kadita terrorizes teamfights. "Daloy ng tubig, daloy ng MVP."',
  },
  {
    id: 5,
    username: 'Xinn',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Xinn555&backgroundColor=0d1117',
    rank: 'Mythical Glory',
    rankTier: 'mythical-glory',
    rankPoints: 3654,
    server: 'Philippines',
    team: null,
    role: 'Roam',
    winRate: 59.8,
    totalGames: 1312,
    wins: 785,
    losses: 527,
    mvpCount: 156,
    kda: 3.9,
    avgKills: 2.8,
    avgDeaths: 3.1,
    avgAssists: 15.2,
    favoriteHeroes: [13, 14, 15],
    bio: 'Full support/tank roamer. The backbone nobody credits. 15 avg assists because carrying means different things.',
  },
]

// ── MATCH HISTORY per player ────────────────────────────
function genMatch(heroId, win, ago, kills, deaths, assists, mvp = false) {
  const hero = HEROES.find(h => h.id === heroId)
  return {
    id: Math.random().toString(36).slice(2),
    hero,
    result: win ? 'WIN' : 'LOSS',
    kills, deaths, assists,
    kda: ((kills + assists) / Math.max(deaths, 1)).toFixed(1),
    mvp,
    duration: `${Math.floor(Math.random() * 8 + 11)}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}`,
    mode: ['Ranked', 'Ranked', 'Ranked', 'Classic', 'Brawl'][Math.floor(Math.random() * 5)],
    ago,
    damage: Math.floor(Math.random() * 45000 + 18000),
    gold:   Math.floor(Math.random() * 7000 + 7500),
  }
}

// Per-player match history — hero IDs match each player's mains
export const MATCH_HISTORY_BY_PLAYER = {
  // Maki — Harley/Nolan/Fredrinn
  1: [
    genMatch(1, true,  '10 min ago',  14, 1, 8,  true),
    genMatch(2, true,  '1 hr ago',    11, 2, 7,  false),
    genMatch(1, false, '2 hrs ago',   5,  6, 4,  false),
    genMatch(2, true,  '3 hrs ago',   13, 1, 9,  true),
    genMatch(1, true,  'Yesterday',   10, 2, 11, true),
    genMatch(3, false, 'Yesterday',   4,  5, 7,  false),
    genMatch(1, true,  '2 days ago',  16, 1, 6,  true),
    genMatch(2, true,  '2 days ago',  9,  2, 8,  false),
    genMatch(3, true,  '3 days ago',  7,  3, 10, false),
    genMatch(1, false, '3 days ago',  3,  7, 5,  false),
    genMatch(2, true,  '4 days ago',  12, 1, 9,  true),
    genMatch(1, true,  '4 days ago',  11, 2, 7,  false),
    genMatch(1, false, '5 days ago',  4,  6, 3,  false),
    genMatch(2, true,  '5 days ago',  10, 1, 12, true),
    genMatch(3, true,  '1 week ago',  8,  3, 9,  false),
  ],
  // Dars — Irithel/Claude/Layla
  2: [
    genMatch(4, true,  '30 min ago',  11, 2, 9,  true),
    genMatch(5, true,  '2 hrs ago',   9,  3, 8,  false),
    genMatch(4, false, '3 hrs ago',   6,  5, 6,  false),
    genMatch(6, true,  '4 hrs ago',   10, 2, 7,  true),
    genMatch(4, true,  'Yesterday',   13, 1, 10, true),
    genMatch(5, false, 'Yesterday',   5,  4, 7,  false),
    genMatch(4, true,  '2 days ago',  12, 2, 8,  true),
    genMatch(6, true,  '2 days ago',  8,  3, 9,  false),
    genMatch(5, false, '3 days ago',  4,  6, 5,  false),
    genMatch(4, true,  '3 days ago',  11, 1, 11, true),
    genMatch(4, true,  '4 days ago',  9,  2, 8,  false),
    genMatch(5, false, '4 days ago',  5,  5, 6,  false),
    genMatch(4, true,  '5 days ago',  14, 1, 7,  true),
    genMatch(6, true,  '5 days ago',  7,  3, 10, false),
    genMatch(4, false, '1 week ago',  3,  7, 5,  false),
  ],
  // Burger — Ruby/Sora/Cici
  3: [
    genMatch(7, true,  '45 min ago',  8,  2, 14, true),
    genMatch(8, true,  '2 hrs ago',   7,  3, 12, false),
    genMatch(7, false, '3 hrs ago',   3,  6, 8,  false),
    genMatch(9, true,  '4 hrs ago',   9,  2, 11, true),
    genMatch(7, true,  'Yesterday',   10, 1, 13, true),
    genMatch(8, false, 'Yesterday',   4,  5, 9,  false),
    genMatch(7, true,  '2 days ago',  8,  3, 15, false),
    genMatch(9, true,  '2 days ago',  6,  2, 12, false),
    genMatch(7, false, '3 days ago',  2,  7, 6,  false),
    genMatch(8, true,  '3 days ago',  9,  2, 14, true),
    genMatch(7, true,  '4 days ago',  7,  3, 11, false),
    genMatch(9, false, '4 days ago',  3,  5, 8,  false),
    genMatch(7, true,  '5 days ago',  11, 1, 12, true),
    genMatch(8, true,  '5 days ago',  6,  4, 13, false),
    genMatch(7, false, '1 week ago',  2,  8, 7,  false),
  ],
  // Jimeneaa — Kadita/Lunox/Kagura
  4: [
    genMatch(10, true,  '20 min ago',  13, 1, 7,  true),
    genMatch(11, true,  '1 hr ago',    11, 2, 8,  true),
    genMatch(10, false, '2 hrs ago',   4,  5, 5,  false),
    genMatch(12, true,  '3 hrs ago',   12, 1, 9,  true),
    genMatch(10, true,  'Yesterday',   15, 0, 6,  true),
    genMatch(11, false, 'Yesterday',   5,  5, 6,  false),
    genMatch(10, true,  '2 days ago',  14, 1, 8,  true),
    genMatch(12, true,  '2 days ago',  10, 2, 9,  false),
    genMatch(11, false, '3 days ago',  3,  6, 4,  false),
    genMatch(10, true,  '3 days ago',  16, 1, 5,  true),
    genMatch(10, true,  '4 days ago',  12, 1, 7,  false),
    genMatch(12, false, '4 days ago',  4,  6, 5,  false),
    genMatch(10, true,  '5 days ago',  13, 0, 9,  true),
    genMatch(11, true,  '5 days ago',  9,  2, 10, false),
    genMatch(10, false, '1 week ago',  3,  7, 4,  false),
  ],
  // Xinn — Tigreal/Grock/Estes (roamer — low kills, high assists)
  5: [
    genMatch(13, true,  '1 hr ago',    2,  3, 18, false),
    genMatch(14, true,  '2 hrs ago',   1,  2, 20, true),
    genMatch(13, false, '3 hrs ago',   0,  6, 10, false),
    genMatch(15, true,  '4 hrs ago',   1,  2, 22, true),
    genMatch(13, true,  'Yesterday',   3,  3, 17, false),
    genMatch(14, false, 'Yesterday',   1,  5, 11, false),
    genMatch(15, true,  '2 days ago',  2,  2, 19, true),
    genMatch(13, true,  '2 days ago',  1,  3, 16, false),
    genMatch(14, false, '3 days ago',  0,  6, 8,  false),
    genMatch(13, true,  '3 days ago',  2,  2, 21, true),
    genMatch(15, true,  '4 days ago',  1,  3, 18, false),
    genMatch(13, false, '4 days ago',  0,  5, 9,  false),
    genMatch(14, true,  '5 days ago',  2,  2, 20, true),
    genMatch(15, true,  '5 days ago',  1,  1, 23, true),
    genMatch(13, false, '1 week ago',  0,  7, 7,  false),
  ],
}

// Default export for backwards compat
export const MATCH_HISTORY = MATCH_HISTORY_BY_PLAYER[1]
