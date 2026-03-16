import React from 'react'
import styles from './StatCards.module.css'

export default function StatCards({ player }) {
  const stats = [
    {
      label: 'KDA Ratio',
      value: player.kda,
      sub: `${player.avgKills} / ${player.avgDeaths} / ${player.avgAssists}`,
      color: '#3d8bff',
      glow: 'rgba(61,139,255,0.2)',
      icon: '⚔️',
    },
    {
      label: 'Win Rate',
      value: `${player.winRate}%`,
      sub: `${player.wins}W — ${player.losses}L`,
      color: '#2ecc71',
      glow: 'rgba(46,204,113,0.2)',
      icon: '🏆',
    },
    {
      label: 'Avg Kills',
      value: player.avgKills,
      sub: 'per game',
      color: '#ff4757',
      glow: 'rgba(255,71,87,0.2)',
      icon: '💀',
    },
    {
      label: 'Avg Assists',
      value: player.avgAssists,
      sub: 'per game',
      color: '#ffcc44',
      glow: 'rgba(255,204,68,0.2)',
      icon: '🤝',
    },
    {
      label: 'MVP Count',
      value: player.mvpCount,
      sub: `${((player.mvpCount / player.totalGames) * 100).toFixed(1)}% of games`,
      color: '#9b59b6',
      glow: 'rgba(155,89,182,0.25)',
      icon: '👑',
    },
    {
      label: 'Total Games',
      value: player.totalGames.toLocaleString(),
      sub: 'all modes',
      color: '#00d2ff',
      glow: 'rgba(0,210,255,0.18)',
      icon: '🎮',
    },
  ]

  return (
    <div className={styles.grid}>
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={styles.card}
          style={{ '--c': s.color, '--g': s.glow, animationDelay: `${i * 0.06}s` }}
        >
          <div className={styles.cardGlow}/>
          <div className={styles.top}>
            <span className={styles.icon}>{s.icon}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
          <div className={styles.value}>{s.value}</div>
          <div className={styles.sub}>{s.sub}</div>
          <div className={styles.bar}>
            <div className={styles.barFill} style={{ background: s.color }}/>
          </div>
        </div>
      ))}
    </div>
  )
}
