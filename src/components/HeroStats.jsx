import React from 'react'
import styles from './HeroStats.module.css'

export default function HeroStats({ heroes }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>Hero Mastery</h2>
        <span className={styles.sub}>Top {heroes.length} most played</span>
      </div>

      <div className={styles.list}>
        {heroes.map((hero, i) => {
          const wr = ((hero.wins / hero.games) * 100).toFixed(1)
          const isHot = parseFloat(wr) >= 65

          return (
            <div
              key={hero.id}
              className={styles.heroCard}
              style={{ '--hc': hero.color, animationDelay: `${i * 0.07}s` }}
            >
              <div className={styles.heroGlow}/>

              <div className={styles.rank}>#{i + 1}</div>

              <div className={styles.heroIcon} style={{ background: `${hero.color}18`, borderColor: `${hero.color}40` }}>
                <span className={styles.heroEmoji}>{hero.icon}</span>
              </div>

              <div className={styles.heroInfo}>
                <div className={styles.heroName}>{hero.name}</div>
                <div className={styles.heroRole} style={{ color: hero.color }}>{hero.role}</div>
              </div>

              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatVal}>{hero.games}</span>
                  <span className={styles.heroStatLabel}>Games</span>
                </div>
                <div className={styles.heroStatDiv}/>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatVal} style={{ color: parseFloat(wr) >= 50 ? 'var(--green)' : 'var(--red)' }}>
                    {wr}%
                  </span>
                  <span className={styles.heroStatLabel}>Win Rate</span>
                </div>
                <div className={styles.heroStatDiv}/>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatVal} style={{ color: 'var(--accent)' }}>{hero.kda}</span>
                  <span className={styles.heroStatLabel}>KDA</span>
                </div>
              </div>

              <div className={styles.wrBar}>
                <div
                  className={styles.wrFill}
                  style={{ width: `${wr}%`, background: parseFloat(wr) >= 50 ? 'var(--green)' : 'var(--red)' }}
                />
              </div>

              {isHot && <span className={styles.hotBadge}>🔥 Hot</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
