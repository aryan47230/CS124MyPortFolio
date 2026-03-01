'use client'
import ModalBase from './ModalBase'
import { motion } from 'framer-motion'

export default function EducationModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalBase
      onClose={onClose}
      accentColor="#f59e0b"
      accentRgb="245,158,11"
      title="EDUCATION"
      subtitle="Academic Records · Certifications"
    >
      <div className="space-y-5">

        {/* UIUC */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-lg p-5"
          style={{ background: '#0f0f0f', border: '1px solid #1e1e1e' }}
        >
          <div className="flex gap-4">
            <div className="w-0.5 flex-shrink-0 self-stretch rounded-full"
              style={{ background: 'rgba(245,158,11,0.4)' }} />
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl tracking-wider text-white">
                    UNIVERSITY OF ILLINOIS
                  </h3>
                  <h4 className="font-display text-lg tracking-wider text-amber-glow/70">
                    URBANA-CHAMPAIGN
                  </h4>
                </div>
                <span className="font-mono text-[10px] px-2 py-1 rounded"
                  style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)', color: 'rgba(245,158,11,0.8)' }}>
                  2024 – 2028
                </span>
              </div>
              <p className="font-mono text-xs text-neutral-400 mt-2 tracking-widest">
                B.S. Electrical & Electronics Engineering
              </p>
              <p className="font-mono text-xs text-neutral-600 tracking-widest">
                Minor in Computer Science
              </p>

              <div className="mt-4">
                <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 mb-2 uppercase">Activities</p>
                <div className="flex flex-wrap gap-2">
                  {['EV Concept Autonomous', 'Illinois Business Consulting', 'IEEE'].map(a => (
                    <span key={a} className="font-mono text-[10px] px-2 py-0.5 rounded"
                      style={{ background: '#111', border: '1px solid #222', color: 'rgba(255,255,255,0.3)' }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* High School */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg p-5"
          style={{ background: '#0f0f0f', border: '1px solid #1e1e1e' }}
        >
          <div className="flex gap-4">
            <div className="w-0.5 flex-shrink-0 self-stretch rounded-full"
              style={{ background: 'rgba(245,158,11,0.15)' }} />
            <div className="flex-1">
              <h3 className="font-display text-xl tracking-wider text-white">Jakarta Intercultural School</h3>
              <p className="font-mono text-xs text-neutral-500 mt-0.5 tracking-widest">AP Diploma Program</p>
              <div className="mt-3">
                <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 mb-2 uppercase">Leadership & Activities</p>
                <div className="flex flex-wrap gap-2">
                  {['Code Club (President)', 'VEX Robotics (Founder)', 'Engineering Off-Grid', 'Varsity Rugby', 'Film Society'].map(a => (
                    <span key={a} className="font-mono text-[10px] px-2 py-0.5 rounded"
                      style={{ background: '#111', border: '1px solid #222', color: 'rgba(255,255,255,0.3)' }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Relevant coursework */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-lg p-4"
          style={{ background: '#0a0a0a', border: '1px solid #1a1a1a' }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 mb-3 uppercase">Relevant Focus Areas</p>
          <div className="grid grid-cols-2 gap-2">
            {['Embedded Systems', 'Digital Signal Processing', 'Machine Learning', 'Computer Architecture', 'Control Theory', 'Data Structures & Algorithms'].map(c => (
              <div key={c} className="font-mono text-xs text-neutral-500 py-1.5 px-2 rounded"
                style={{ background: '#111', border: '1px solid #1e1e1e' }}>
                {c}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </ModalBase>
  )
}
