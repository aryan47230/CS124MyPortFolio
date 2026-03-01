'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Diploma({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative flex flex-col items-center gap-1 cursor-none"
      data-hoverable
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} className="object-label mb-1">
        EDUCATION
      </motion.div>

      <motion.div
        animate={{ rotate: hovered ? -2 : 3 }}
        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      >
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
          {/* Paper shadow */}
          <rect x="8" y="8" width="124" height="88" rx="3" fill="rgba(0,0,0,0.4)" transform="rotate(3 8 8)"/>
          {/* Main paper */}
          <rect x="4" y="4" width="124" height="88" rx="3"
            fill={hovered ? '#1a1408' : '#141410'}
            stroke={hovered ? 'rgba(245,158,11,0.3)' : '#2a2a20'}
            strokeWidth="1"
          />
          {/* Border decoration */}
          <rect x="10" y="10" width="112" height="76" rx="2"
            fill="none"
            stroke={hovered ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.04)'}
            strokeWidth="0.5"
            strokeDasharray="4,3"
          />
          {/* UIUC seal hint */}
          <circle cx="66" cy="30" r="12"
            fill="none"
            stroke={hovered ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.06)'}
            strokeWidth="1"
          />
          <text x="66" y="33" textAnchor="middle"
            fill={hovered ? 'rgba(245,158,11,0.6)' : 'rgba(255,255,255,0.1)'}
            fontSize="8" fontFamily="IBM Plex Mono">
            UIUC
          </text>
          {/* Lines */}
          {[50, 60, 70, 80].map((y, i) => (
            <rect key={i} x="20" y={y} width={80 + (i % 2) * 16} height="2" rx="1"
              fill={hovered ? 'rgba(245,158,11,0.12)' : 'rgba(255,255,255,0.04)'}
            />
          ))}
          {/* Seal dot */}
          <circle cx="112" cy="78" r="8"
            fill={hovered ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.04)'}
            stroke={hovered ? 'rgba(245,158,11,0.4)' : '#333'}
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      <p className="font-mono text-[9px] text-neutral-700 tracking-widest">EDUCATION</p>
    </div>
  )
}
