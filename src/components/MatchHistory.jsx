import React, { useState } from 'react'
import styles from './MatchHistory.module.css'

export default function MatchHistory({ matches }) {
  const [filter, setFilter] = useState('all')

  const filtered = matches.filter(m => {
    if (filter === 'wins')   return m.result === 'WIN'
    if (filter === 'losses') return m.result === 'LOSS'
    if (filter === 'mvp')    return m.mvp
    return true
  })

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>Match History</h2>
        <div className={styles.filters}>
          {[
            { key: 'all',    label: 'All' },
            { key: 'wins',   label: 'Wins' },
            { key: 'losses', label: 'Losses' },
            { key: 'mvp',    label: '👑 MVP' },
          ].map(f => (
            <button
              key={f.key}
              className={`${styles.filterBtn} ${filter === f.key ? styles.active : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.list}>
        {filtered.map((m, i) => {
          const isWin = m.result === 'WIN'
          const kda   = parseFloat(m.kda)

          return (
            <div
              key={m.id}
              className={`${styles.match} ${isWin ? styles.win : styles.loss}`}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {/* Result stripe */}
              <div className={styles.resultStripe}/>

              {/* Hero */}
              <div className={styles.heroWrap}>
                <div className={styles.heroIcon} style={{ background: `${m.hero?.color}18`, borderColor: `${m.hero?.color}40` }}>
                  <span style={{ fontSize: 18 }}>{m.hero?.icon || '⚔️'}</span>
                </div>
                <div>
                  <div className={styles.heroName}>{m.hero?.name || '—'}</div>
                  <div className={styles.heroRole} style={{ color: m.hero?.color }}>{m.hero?.role}</div>
                </div>
              </div>

              {/* Result + mode */}
              <div className={styles.resultWrap}>
                <span className={`${styles.resultBadge} ${isWin ? styles.winBadge : styles.lossBadge}`}>
                  {m.result}
                </span>
                {m.mvp && <span className={styles.mvpBadge}>👑 MVP</span>}
                <div className={styles.modeBadge}>{m.mode}</div>
              </div>

              {/* KDA */}
              <div className={styles.kdaBlock}>
                <div className={styles.kdaMain}>
                  <span className={styles.kills}>{m.kills}</span>
                  <span className={styles.kdaSep}>/</span>
                  <span className={styles.deaths}>{m.deaths}</span>
                  <span className={styles.kdaSep}>/</span>
                  <span className={styles.assists}>{m.assists}</span>
                </div>
                <div className={styles.kdaRatio} style={{
                  color: kda >= 6 ? 'var(--gold)' : kda >= 4 ? 'var(--green)' : kda >= 2.5 ? 'var(--accent)' : 'var(--text2)'
                }}>
                  {m.kda} KDA
                </div>
              </div>

              {/* Extra stats */}
              <div className={styles.extras}>
                <div className={styles.extra}>
                  <span className={styles.extraVal}>{(m.damage / 1000).toFixed(1)}k</span>
                  <span className={styles.extraLabel}>DMG</span>
                </div>
                <div className={styles.extra}>
                  <span className={styles.extraVal}>{(m.gold / 1000).toFixed(1)}k</span>
                  <span className={styles.extraLabel}>Gold</span>
                </div>
              </div>

              {/* Duration + time */}
              <div className={styles.time}>
                <div className={styles.duration}>{m.duration}</div>
                <div className={styles.ago}>{m.ago}</div>
              </div>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <div className={styles.empty}>No matches found for this filter.</div>
        )}
      </div>
    </div>
  )
}
