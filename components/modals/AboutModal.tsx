'use client'
import ModalBase from './ModalBase'
import { motion } from 'framer-motion'

export default function AboutModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalBase
      onClose={onClose}
      accentColor="#f59e0b"
      accentRgb="245,158,11"
      title="ABOUT ME"
      subtitle="Engineer's Log · Personal"
    >
      <div className="space-y-6">

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="rounded-lg p-5"
          style={{ background: '#0f0f0f', border: '1px solid #1e1e1e' }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 mb-3 uppercase">Mission Statement</p>
          <p className="text-neutral-300 leading-relaxed text-sm">
            Building technology that leaves the screen and operates in the real world. My expertise spans 
            AI/ML development, embedded systems, robotics, and scalable software — from low-level firmware 
            to intelligent applications and full product development.
          </p>
          <p className="text-neutral-400 leading-relaxed text-sm mt-3">
            I'm drawn to complex systems where software, hardware, and data converge, and where execution 
            matters as much as ideas. I've worked across autonomy, control systems, production software, 
            and technical leadership — shipping systems, leading teams, and turning ambitious concepts 
            into deployed solutions.
          </p>
          <p className="mt-3 text-sm" style={{ color: 'rgba(245,158,11,0.7)' }}>
            Interested in building intelligent, high-performance products at the frontier of 
            mobility, robotics, and applied AI.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-3"
        >
          {[
            { num: '200+', label: 'Students Supported' },
            { num: '5+', label: 'Orgs & Projects' },
            { num: '3', label: 'Domains: Robot · Embedded · AI' },
          ].map((s, i) => (
            <div key={i} className="rounded-lg p-4 text-center"
              style={{ background: '#0a0a0a', border: '1px solid #1a1a1a' }}>
              <p className="font-display text-3xl tracking-wider text-amber-glow"
                style={{ textShadow: '0 0 12px rgba(245,158,11,0.3)' }}>
                {s.num}
              </p>
              <p className="font-mono text-[9px] text-neutral-600 mt-1 tracking-widest leading-relaxed">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-lg p-4"
          style={{ background: '#0a0a0a', border: '1px solid #1a1a1a' }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 mb-3 uppercase">Interests & Following</p>
          <div className="flex flex-wrap gap-2">
            {['Mobility Tech', 'Applied Robotics', 'Edge AI', 'Autonomous Vehicles', 'Firmware', 'Full-Stack', 'Rivian', 'SIGRobotics'].map(t => (
              <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.12)', color: 'rgba(245,158,11,0.6)' }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <a href="https://linkedin.com/in/aryanaryan" target="_blank" rel="noopener noreferrer"
            data-hoverable
            className="flex-1 rounded-lg p-3 text-center font-mono text-xs tracking-widest transition-colors"
            style={{ background: '#0a0a0a', border: '1px solid #1e1e1e', color: 'rgba(245,158,11,0.6)' }}>
            LinkedIn ↗
          </a>
          <a href="mailto:aryan@illinois.edu"
            data-hoverable
            className="flex-1 rounded-lg p-3 text-center font-mono text-xs tracking-widest transition-colors"
            style={{ background: '#0a0a0a', border: '1px solid #1e1e1e', color: 'rgba(245,158,11,0.6)' }}>
            Email ↗
          </a>
          <a href="https://github.com/aryanaryan" target="_blank" rel="noopener noreferrer"
            data-hoverable
            className="flex-1 rounded-lg p-3 text-center font-mono text-xs tracking-widest transition-colors"
            style={{ background: '#0a0a0a', border: '1px solid #1e1e1e', color: 'rgba(245,158,11,0.6)' }}>
            GitHub ↗
          </a>
        </motion.div>
      </div>
    </ModalBase>
  )
}
