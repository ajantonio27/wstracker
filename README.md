# 🎮 GGTrack — E-sports Player Profile & Stats Tracker

A dark, anime-aesthetic React app for tracking e-sports player profiles,
hero mastery, and match history. Inspired by OP.GG and MLBB profiles.

## Tech Stack
- **React 18** — component-based UI
- **Vite** — fast dev server & bundler
- **CSS Modules** — scoped, zero-conflict styles
- **Mock Data** — no backend needed, fully offline

## Project Structure
```
esports-tracker/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # sticky nav + player switcher + search
│   │   ├── Navbar.module.css
│   │   ├── ProfileHero.jsx       # banner with avatar, rank card, recent form
│   │   ├── ProfileHero.module.css
│   │   ├── StatCards.jsx         # KDA, win rate, kills, assists grid
│   │   ├── StatCards.module.css
│   │   ├── HeroStats.jsx         # hero mastery list with win rate bars
│   │   ├── HeroStats.module.css
│   │   ├── MatchHistory.jsx      # filterable match list
│   │   └── MatchHistory.module.css
│   ├── hooks/
│   │   └── usePlayer.js          # player state + search logic
│   ├── pages/
│   │   ├── ProfilePage.jsx       # tab layout: overview / heroes / matches
│   │   └── ProfilePage.module.css
│   ├── data/
│   │   └── mockData.js           # players, heroes, match history
│   ├── styles/
│   │   └── global.css            # design tokens + grid background
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Setup & Run
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build for Production
```bash
npm run build
```

## Features
- 🎮 **Player profiles** — username, rank, role, team, bio
- 🏆 **Rank display** — Warrior → Mythical Glory with glow effects
- 📊 **Stat cards** — KDA, win rate, avg kills, assists, MVP count
- ⚔️ **Hero mastery** — top heroes with win rate bars and KDA
- 📋 **Match history** — filterable by wins / losses / MVP
- 🔍 **Player search** — switch between multiple profiles
- 🌟 **Animations** — card reveals, bar fills, rank pulse ring
- 📱 **Responsive** — works on mobile too

## React Concepts Used
- Functional components + hooks
- Custom hook (`usePlayer`)
- CSS Modules for scoped styling
- Props drilling + lifting state up
- Conditional rendering
- Array methods (map, filter, find)
- useState for UI state management

## Portfolio Description
> *"A dark-themed e-sports player profile and stats tracker built with
> React 18 and Vite. Features player rank display, hero mastery stats,
> KDA tracking, and filterable match history. Built with CSS Modules
> for scoped styling and a custom usePlayer hook for state management.
> Designed with an anime/gaming aesthetic inspired by OP.GG and
> Mobile Legends."*
