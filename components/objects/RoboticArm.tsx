'use client'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'

export default function RoboticArm({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative flex flex-col items-center gap-3 cursor-none"
      data-hoverable
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Label */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
        className="object-label text-center"
      >
        ROBOTICS
      </motion.div>

      {/* SVG Arm */}
      <motion.div
        animate={{ rotate: hovered ? -4 : 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
        className="relative"
      >
        <svg width="160" height="220" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base plate */}
          <rect x="40" y="190" width="80" height="16" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
          <rect x="55" y="186" width="50" height="8" rx="3" fill="#252525" stroke="#333" strokeWidth="1"/>

          {/* Main body segment */}
          <motion.g
            animate={{ rotate: hovered ? 3 : 0 }}
            style={{ originX: '80px', originY: '190px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
          >
            {/* Lower arm */}
            <rect x="68" y="120" width="24" height="72" rx="6" fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="1"/>
            <rect x="72" y="124" width="16" height="64" rx="4" fill="#161616"/>
            {/* Hydraulic lines */}
            <line x1="75" y1="128" x2="75" y2="180" stroke="#333" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="85" y1="128" x2="85" y2="180" stroke="#333" strokeWidth="1" strokeDasharray="3,3"/>

            {/* Elbow joint */}
            <circle cx="80" cy="118" r="14" fill="#222" stroke="#333" strokeWidth="1.5"/>
            <circle cx="80" cy="118" r="8" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
            <circle cx="80" cy="118" r="3" fill={hovered ? '#f59e0b' : '#333'}
              style={{ filter: hovered ? 'drop-shadow(0 0 6px rgba(245,158,11,0.8))' : 'none' }}
            />

            {/* Upper arm */}
            <motion.g
              animate={{ rotate: hovered ? -8 : 0 }}
              style={{ originX: '80px', originY: '118px' }}
              transition={{ type: 'spring', stiffness: 90, damping: 14 }}
            >
              <rect x="68" y="50" width="24" height="70" rx="6" fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="1"/>
              <rect x="72" y="54" width="16" height="62" rx="4" fill="#161616"/>
              {/* Amber LED strip */}
              <rect x="73" y="58" width="5" height="50" rx="2"
                fill={hovered ? 'rgba(245,158,11,0.15)' : 'rgba(245,158,11,0.04)'}
                stroke={hovered ? 'rgba(245,158,11,0.4)' : 'rgba(245,158,11,0.1)'}
                strokeWidth="0.5"
              />

              {/* Shoulder joint */}
              <circle cx="80" cy="50" r="16" fill="#222" stroke="#333" strokeWidth="1.5"/>
              <circle cx="80" cy="50" r="9" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
              <circle cx="80" cy="50" r="3.5" fill={hovered ? '#f59e0b' : '#333'}
                style={{ filter: hovered ? 'drop-shadow(0 0 8px rgba(245,158,11,0.9))' : 'none' }}
              />

              {/* End effector / gripper */}
              <motion.g
                animate={{ rotate: hovered ? 12 : 0 }}
                style={{ originX: '80px', originY: '50px' }}
                transition={{ type: 'spring', stiffness: 80, damping: 12 }}
              >
                <rect x="70" y="14" width="20" height="38" rx="5" fill="#1e1e1e" stroke="#2a2a2a" strokeWidth="1"/>
                {/* Gripper fingers */}
                <rect x="63" y="4" width="8" height="16" rx="3" fill="#222" stroke="#333" strokeWidth="1"/>
                <rect x="89" y="4" width="8" height="16" rx="3" fill="#222" stroke="#333" strokeWidth="1"/>
                {/* Gripper tip glow */}
                <rect x="65" y="2" width="4" height="4" rx="1"
                  fill={hovered ? '#f59e0b' : '#333'}
                  style={{ filter: hovered ? 'drop-shadow(0 0 4px rgba(245,158,11,0.9))' : 'none' }}
                />
                <rect x="91" y="2" width="4" height="4" rx="1"
                  fill={hovered ? '#f59e0b' : '#333'}
                  style={{ filter: hovered ? 'drop-shadow(0 0 4px rgba(245,158,11,0.9))' : 'none' }}
                />
                {/* Wrist joint */}
                <circle cx="80" cy="50" r="6" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
              </motion.g>
            </motion.g>
          </motion.g>

          {/* Base bolts */}
          {[50, 65, 80, 95, 110].map(x => (
            <circle key={x} cx={x} cy="198" r="2" fill="#2a2a2a"/>
          ))}
        </svg>

        {/* Hover ring */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.95 }}
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{ border: '1px solid rgba(245,158,11,0.2)', boxShadow: '0 0 20px rgba(245,158,11,0.1)' }}
        />
      </motion.div>

      <p className="font-mono text-[9px] text-neutral-700 tracking-widest text-center max-w-[140px]">
        AUTONOMOUS NAVIGATION<br/>& CONTROL SYSTEMS
      </p>
    </div>
  )
}
