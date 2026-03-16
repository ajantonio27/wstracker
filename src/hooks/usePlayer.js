import { useState } from 'react'
import { PLAYERS, MATCH_HISTORY_BY_PLAYER, HEROES } from '../data/mockData'

export function usePlayer() {
  const [activePlayerId, setActivePlayerId] = useState(1)
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')

  const player = PLAYERS.find(p => p.id === activePlayerId) || PLAYERS[0]

  const heroStats = player.favoriteHeroes
    .map(id => HEROES.find(h => h.id === id))
    .filter(Boolean)

  const recentMatches = MATCH_HISTORY_BY_PLAYER[player.id] || []

  const recentForm = recentMatches.slice(0, 5).map(m => m.result)

  const searchResults = searchQuery.trim()
    ? PLAYERS.filter(p =>
        p.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return {
    player,
    heroStats,
    recentMatches,
    recentForm,
    players: PLAYERS,
    searchQuery,
    setSearchQuery,
    searchResults,
    activePlayerId,
    setActivePlayerId,
    activeTab,
    setActiveTab,
  }
}
