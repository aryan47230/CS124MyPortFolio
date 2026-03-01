'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Trophy({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative flex flex-col items-center gap-1 cursor-none"
      data-hoverable
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} className="object-label mb-1"
        style={{ color: 'rgba(251,191,36,0.8)' }}>
        AWARDS
      </motion.div>

      <motion.div
        animate={{ y: hovered ? -4 : 0, rotate: hovered ? 2 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 12 }}
      >
        <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
          {/* Base */}
          <rect x="16" y="84" width="48" height="8" rx="3"
            fill={hovered ? '#292010' : '#1a1a14'}
            stroke={hovered ? 'rgba(251,191,36,0.4)' : '#2a2a1a'}
            strokeWidth="1"
          />
          <rect x="22" y="78" width="36" height="8" rx="2"
            fill={hovered ? '#201808' : '#141410'}
            stroke={hovered ? 'rgba(251,191,36,0.3)' : '#222'}
            strokeWidth="0.5"
          />
          {/* Stem */}
          <rect x="33" y="58" width="14" height="22" rx="2"
            fill={hovered ? 'rgba(251,191,36,0.15)' : '#161614'}
            stroke={hovered ? 'rgba(251,191,36,0.3)' : '#222'}
            strokeWidth="1"
          />
          {/* Cup body */}
          <path d="M14 12 Q10 40 20 56 Q28 64 40 64 Q52 64 60 56 Q70 40 66 12 Z"
            fill={hovered ? '#1a1408' : '#141410'}
            stroke={hovered ? 'rgba(251,191,36,0.5)' : '#2a2a1a'}
            strokeWidth="1"
          />
          {/* Shine */}
          <path d="M22 16 Q20 30 24 44"
            stroke={hovered ? 'rgba(251,191,36,0.2)' : 'rgba(255,255,255,0.04)'}
            strokeWidth="2" strokeLinecap="round"
          />
          {/* Handles */}
          <path d="M14 20 Q4 20 4 32 Q4 44 14 44" stroke={hovered ? 'rgba(251,191,36,0.4)' : '#222'} strokeWidth="4" fill="none" strokeLinecap="round"/>
          <path d="M66 20 Q76 20 76 32 Q76 44 66 44" stroke={hovered ? 'rgba(251,191,36,0.4)' : '#222'} strokeWidth="4" fill="none" strokeLinecap="round"/>
          {/* Star */}
          <text x="40" y="42" textAnchor="middle"
            fill={hovered ? 'rgba(251,191,36,0.8)' : 'rgba(255,255,255,0.1)'}
            fontSize="20"
            style={{ filter: hovered ? 'drop-shadow(0 0 6px rgba(251,191,36,0.6))' : 'none' }}>
            ★
          </text>
          {/* Top rim */}
          <ellipse cx="40" cy="12" rx="26" ry="5"
            fill={hovered ? '#1a1408' : '#141410'}
            stroke={hovered ? 'rgba(251,191,36,0.4)' : '#2a2a1a'}
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      <p className="font-mono text-[9px] text-neutral-700 tracking-widest">AWARDS</p>
    </div>
  )
}
