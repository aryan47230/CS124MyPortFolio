'use client'
import { motion } from 'framer-motion'
import type { ModalType } from '@/app/page'
import RoboticArm from './objects/RoboticArm'
import Oscilloscope from './objects/Oscilloscope'
import Laptop from './objects/Laptop'
import CoffeeMug from './objects/CoffeeMug'
import Diploma from './objects/Diploma'
import Trophy from './objects/Trophy'

export default function WorkbenchScene({ onOpen }: { onOpen: (t: ModalType) => void }) {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Hero name block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="pt-28 pb-8 px-12 flex flex-col gap-1"
      >
        <p className="font-mono text-xs tracking-[0.4em] text-neutral-600 uppercase">
          EE + CS @ UIUC · Robotics · Embedded · AI/ML
        </p>
        <h1
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-none tracking-wider"
          style={{
            color: '#e5e7eb',
            textShadow: '0 2px 40px rgba(0,0,0,0.8)',
          }}
        >
          ARYAN ARYAN
        </h1>
        <p className="font-mono text-xs tracking-widest text-neutral-600 mt-1">
          ── CLICK AN OBJECT TO EXPLORE ──
        </p>
      </motion.div>

      {/* Workbench surface */}
      <div
        className="relative flex-1 mx-6 mb-6 rounded-xl overflow-hidden metal-surface"
        style={{
          minHeight: '65vh',
          border: '1px solid #1e1e1e',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.03), inset 0 -4px 20px rgba(0,0,0,0.6), 0 20px 60px rgba(0,0,0,0.8)',
        }}
      >
        {/* Ambient light strips */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.15) 30%, rgba(245,158,11,0.3) 50%, rgba(245,158,11,0.15) 70%, transparent 100%)' }} />

        {/* Corner screws */}
        {[
          'top-3 left-3', 'top-3 right-3',
          'bottom-3 left-3', 'bottom-3 right-3',
        ].map((pos) => (
          <div key={pos} className={`absolute ${pos} screw`} />
        ))}

        {/* Grid lines (workbench mat) */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* ── MAIN OBJECTS ── */}

        {/* Robotic Arm — left zone */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="absolute"
          style={{ left: '8%', top: '10%' }}
        >
          <RoboticArm onClick={() => onOpen('robotics')} />
        </motion.div>

        {/* Oscilloscope — center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="absolute"
          style={{ left: '37%', top: '8%', transform: 'translateX(-50%)' }}
        >
          <Oscilloscope onClick={() => onOpen('embedded')} />
        </motion.div>

        {/* Laptop — right zone */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="absolute"
          style={{ right: '6%', top: '6%' }}
        >
          <Laptop onClick={() => onOpen('software')} />
        </motion.div>

        {/* ── DESK CLUTTER ── */}

        {/* Coffee mug — bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute"
          style={{ left: '4%', bottom: '12%' }}
        >
          <CoffeeMug onClick={() => onOpen('about')} />
        </motion.div>

        {/* Diploma — bottom center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute"
          style={{ left: '38%', bottom: '8%', transform: 'translateX(-50%)' }}
        >
          <Diploma onClick={() => onOpen('education')} />
        </motion.div>

        {/* Trophy — bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute"
          style={{ right: '5%', bottom: '10%' }}
        >
          <Trophy onClick={() => onOpen('awards')} />
        </motion.div>

        {/* Bottom status bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 flex items-center px-6 gap-8"
          style={{ background: 'rgba(0,0,0,0.4)', borderTop: '1px solid #1e1e1e' }}
        >
          <StatusDot color="green" label="SYSTEMS ONLINE" />
          <StatusDot color="amber" label="VERCEL DEPLOYED" />
          <StatusDot color="blue" label="GITHUB CONNECTED" />
          <span className="ml-auto font-mono text-[10px] text-neutral-700 tracking-widest">
            REV 2025.1 · UIUC EE+CS
          </span>
        </div>
      </div>
    </div>
  )
}

function StatusDot({ color, label }: { color: 'green' | 'amber' | 'blue'; label: string }) {
  const colors = {
    green: 'bg-green-400',
    amber: 'bg-amber-400',
    blue: 'bg-blue-400',
  }
  const glows = {
    green: 'rgba(74,222,128,0.8)',
    amber: 'rgba(245,158,11,0.8)',
    blue: 'rgba(96,165,250,0.8)',
  }
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-1.5 h-1.5 rounded-full ${colors[color]} animate-pulse`}
        style={{ boxShadow: `0 0 6px ${glows[color]}` }}
      />
      <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-600">{label}</span>
    </div>
  )
}
