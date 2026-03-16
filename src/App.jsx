import React from 'react'
import Navbar      from './components/Navbar'
import ProfilePage from './pages/ProfilePage'
import { usePlayer } from './hooks/usePlayer'

export default function App() {
  const {
    player,
    heroStats,
    recentMatches,
    players,
    searchQuery,
    setSearchQuery,
    searchResults,
    activePlayerId,
    setActivePlayerId,
    activeTab,
    setActiveTab,
  } = usePlayer()

  return (
    <>
      <Navbar
        players={players}
        activePlayerId={activePlayerId}
        onSelectPlayer={(id) => {
          setActivePlayerId(id)
          setActiveTab('overview')
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
      />
      <ProfilePage
        player={player}
        heroStats={heroStats}
        recentMatches={recentMatches}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  )
}
