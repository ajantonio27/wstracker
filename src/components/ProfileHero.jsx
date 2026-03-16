import React from 'react'
import { RANK_CONFIG, ROLE_COLORS } from '../data/mockData'
import styles from './ProfileHero.module.css'

export default function ProfileHero({ player }) {
  const rank      = RANK_CONFIG[player.rankTier] || RANK_CONFIG['warrior']
  const roleColor = ROLE_COLORS[player.role] || '#4f8ef7'

  // Last 5 matches form — generate from player win rate as approximation
  const formSeeds = {
    1: [true,true,false,true,true],
    2: [true,false,true,true,false],
    3: [true,true,true,false,true],
    4: [true,true,false,true,true],
    5: [false,true,true,false,true],
  }
  const recentForm = formSeeds[player.id] || [true,true,false,true,true]

  return (
    <div className={styles.hero}>
      {/* Animated background glow */}
      <div className={styles.bgGlow} style={{ background: `radial-gradient(ellipse at 30% 50%, ${rank.glow} 0%, transparent 60%)` }}/>

      <div className={styles.inner}>
        {/* Avatar + info */}
        <div className={styles.left}>
          <div className={styles.avatarWrap} style={{ '--rank-color': rank.color }}>
            <img src={player.avatar} alt={player.username} className={styles.avatar}/>
            <div className={styles.avatarRing}/>
            {player.team && <div className={styles.onlineDot}/>}
          </div>

          <div className={styles.info}>
            <div className={styles.tags}>
              <span className={styles.roleTag} style={{ color: roleColor, borderColor: `${roleColor}40`, background: `${roleColor}12` }}>
                {player.role}
              </span>
              {player.team && (
                <span className={styles.teamTag}>🏆 {player.team}</span>
              )}
            </div>
            <h1 className={styles.username}>{player.username}</h1>
            <p className={styles.realName}>{player.realName} · {player.server}</p>
            {player.bio && <p className={styles.bio}>{player.bio}</p>}
          </div>
        </div>

        {/* Rank card */}
        <div className={styles.right}>
          <div className={styles.rankCard} style={{ '--rank-color': rank.color, '--rank-glow': rank.glow }}>
            <div className={styles.rankGlow}/>
            <div className={styles.rankStars}>
              {Array(Math.min(rank.stars, 8)).fill(0).map((_, i) => (
                <span key={i} className={styles.star} style={{ color: rank.color }}>★</span>
              ))}
            </div>
            <div className={styles.rankLabel} style={{ color: rank.color }}>{rank.label}</div>
            <div className={styles.rankPoints}>{player.rankPoints.toLocaleString()} pts</div>

            <div className={styles.rankStats}>
              <div className={styles.rankStat}>
                <span className={styles.rankStatVal} style={{ color: '#34d399' }}>{player.winRate}%</span>
                <span className={styles.rankStatLabel}>Win Rate</span>
              </div>
              <div className={styles.rankStatDiv}/>
              <div className={styles.rankStat}>
                <span className={styles.rankStatVal}>{player.totalGames.toLocaleString()}</span>
                <span className={styles.rankStatLabel}>Games</span>
              </div>
              <div className={styles.rankStatDiv}/>
              <div className={styles.rankStat}>
                <span className={styles.rankStatVal} style={{ color: '#f5b942' }}>{player.mvpCount}</span>
                <span className={styles.rankStatLabel}>MVP</span>
              </div>
            </div>

            {/* Recent form */}
            <div className={styles.formRow}>
              <span className={styles.formLabel}>Recent</span>
              <div className={styles.formBadges}>
                {recentForm.map((w, i) => (
                  <span key={i} className={`${styles.formBadge} ${w ? styles.win : styles.loss}`}>
                    {w ? 'W' : 'L'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
