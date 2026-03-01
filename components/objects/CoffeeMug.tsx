'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CoffeeMug({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative flex flex-col items-center gap-1 cursor-none"
      data-hoverable
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="object-label mb-1"
      >
        ABOUT ME
      </motion.div>

      <div className="relative">
        {/* Steam */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-0.5 rounded-full"
              style={{ background: 'rgba(245,158,11,0.3)', height: 16 }}
              animate={{
                y: [0, -14, -24],
                opacity: [0.4, 0.2, 0],
                scaleX: [1, 1.4, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        {/* Mug SVG */}
        <svg width="72" height="80" viewBox="0 0 72 80" fill="none">
          {/* Saucer */}
          <ellipse cx="36" cy="72" rx="28" ry="5" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
          {/* Mug body */}
          <path d="M12 28 Q12 68 36 68 Q60 68 60 28 Z" fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="1"/>
          <path d="M14 28 H58 Q58 26 36 26 Q14 26 14 28 Z" fill="#222"/>
          {/* Coffee surface */}
          <ellipse cx="36" cy="28" rx="22" ry="5"
            fill={hovered ? 'rgba(245,158,11,0.15)' : '#0d0800'}
            stroke={hovered ? 'rgba(245,158,11,0.4)' : '#1a0f00'}
            strokeWidth="1"
          />
          {/* Handle */}
          <path d="M60 36 Q76 36 76 48 Q76 60 60 60" stroke="#2a2a2a" strokeWidth="5" fill="none" strokeLinecap="round"/>
          <path d="M60 36 Q73 36 73 48 Q73 58 60 58" stroke="#1c1c1c" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Label stripe */}
          <rect x="18" y="38" width="36" height="14" rx="3"
            fill={hovered ? 'rgba(245,158,11,0.08)' : 'rgba(255,255,255,0.02)'}
            stroke={hovered ? 'rgba(245,158,11,0.2)' : '#222'}
            strokeWidth="0.5"
          />
          <text x="36" y="48" textAnchor="middle" fill={hovered ? '#f59e0b' : '#333'}
            fontSize="7" fontFamily="IBM Plex Mono" letterSpacing="1">
            UIUC
          </text>
        </svg>
      </div>

      <p className="font-mono text-[9px] text-neutral-700 tracking-widest">ABOUT ME</p>
    </div>
  )
}
