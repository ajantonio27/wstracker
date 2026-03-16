import React from 'react'
import ProfileHero from '../components/ProfileHero'
import StatCards   from '../components/StatCards'
import HeroStats   from '../components/HeroStats'
import MatchHistory from '../components/MatchHistory'
import styles from './ProfilePage.module.css'

const TABS = [
  { key: 'overview',  label: 'Overview'      },
  { key: 'heroes',    label: 'Hero Stats'    },
  { key: 'matches',   label: 'Match History' },
]

export default function ProfilePage({ player, heroStats, recentMatches, activeTab, setActiveTab }) {
  return (
    <div className={styles.page}>
      <ProfileHero player={player} />

      {/* Tab nav */}
      <div className={styles.tabBar}>
        <div className={styles.tabs}>
          {TABS.map(t => (
            <button
              key={t.key}
              className={`${styles.tab} ${activeTab === t.key ? styles.active : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
              {activeTab === t.key && <span className={styles.tabLine}/>}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {activeTab === 'overview' && (
          <div className={styles.overviewGrid}>
            <div className={styles.overviewMain}>
              <StatCards player={player} />
            </div>
            <div className={styles.overviewSide}>
              <HeroStats heroes={heroStats.slice(0, 3)} />
            </div>
          </div>
        )}

        {activeTab === 'heroes' && (
          <HeroStats heroes={heroStats} />
        )}

        {activeTab === 'matches' && (
          <MatchHistory matches={recentMatches} />
        )}
      </div>
    </div>
  )
}
