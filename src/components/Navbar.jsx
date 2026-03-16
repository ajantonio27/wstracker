import React, { useState, useRef, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar({ players, activePlayerId, onSelectPlayer, searchQuery, setSearchQuery, searchResults }) {
  const [focused, setFocused] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  function handleSelect(id) {
    onSelectPlayer(id)
    setSearchQuery('')
    setFocused(false)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>WS</span>
        <span className={styles.logoText}>WST<em>RACKER</em></span>
        <span className={styles.mlBadge}>MLBB</span>
      </div>

      <div className={styles.searchWrap}>
        <div className={`${styles.searchBox} ${focused ? styles.focused : ''}`}>
          <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="8.5" cy="8.5" r="5.5"/><path d="M15 15l-3-3"/>
          </svg>
          <input
            ref={inputRef}
            className={styles.searchInput}
            type="text"
            placeholder="Search player…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
          />
          <kbd className={styles.kbd}>/</kbd>
        </div>

        {focused && searchResults.length > 0 && (
          <div className={styles.dropdown}>
            {searchResults.map(p => (
              <button key={p.id} className={styles.dropItem} onClick={() => handleSelect(p.id)}>
                <img src={p.avatar} alt={p.username} className={styles.dropAvatar}/>
                <div>
                  <div className={styles.dropName}>{p.username}</div>
                  <div className={styles.dropRank}>{p.rank}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.players}>
        {players.map(p => (
          <button
            key={p.id}
            className={`${styles.playerBtn} ${p.id === activePlayerId ? styles.active : ''}`}
            onClick={() => handleSelect(p.id)}
          >
            <img src={p.avatar} alt={p.username} className={styles.playerAvatar}/>
            <span className={styles.playerName}>{p.username}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
