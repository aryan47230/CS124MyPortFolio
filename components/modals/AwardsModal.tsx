'use client'
import ModalBase from './ModalBase'
import { motion } from 'framer-motion'

export default function AwardsModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalBase
      onClose={onClose}
      accentColor="#fbbf24"
      accentRgb="251,191,36"
      title="AWARDS"
      subtitle="Recognition · Achievements"
    >
      <div className="space-y-5">

        {/* Featured award */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="rounded-lg p-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #110d00, #0f0f0a)',
            border: '1px solid rgba(251,191,36,0.25)',
            boxShadow: '0 0 30px rgba(251,191,36,0.06)',
          }}
        >
          {/* Gold corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-10"
            style={{
              background: 'radial-gradient(circle at 100% 0%, rgba(251,191,36,0.8), transparent 70%)',
            }}
          />

          <div className="flex items-start gap-4">
            <div className="text-4xl flex-shrink-0"
              style={{ filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.5))' }}>
              🏆
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] tracking-[0.3em] px-2 py-0.5 rounded"
                  style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)', color: 'rgba(251,191,36,0.8)' }}>
                  BEST PRESENTATION
                </span>
              </div>
              <h3 className="font-display text-2xl tracking-wider text-white mt-1">
                URSA Fall 2025 Symposium
              </h3>
              <p className="font-mono text-xs mt-1 tracking-widest"
                style={{ color: 'rgba(251,191,36,0.6)' }}>
                Undergraduate Research in Scientific Advancement · UIUC
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { num: '506', label: 'Applicants' },
                  { num: '28', label: 'Selected' },
                  { num: '5.5%', label: 'Acceptance Rate' },
                ].map((s, i) => (
                  <div key={i} className="text-center rounded p-2"
                    style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.1)' }}>
                    <p className="font-display text-xl tracking-wider"
                      style={{ color: '#fbbf24', textShadow: '0 0 8px rgba(251,191,36,0.3)' }}>
                      {s.num}
                    </p>
                    <p className="font-mono text-[9px] text-neutral-600 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                Designed and implemented a low-cost, edge-based smart warehouse monitoring system, 
                integrating embedded systems, Python analytics, and AI-driven workflows to analyze 
                stock levels, picking activity, and demand patterns across 3,204 SKUs.
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {['Embedded Systems', 'Python Analytics', 'AI Workflows', 'John Deere Data', 'Node-RED', 'Arduino'].map(t => (
                  <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded"
                    style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.12)', color: 'rgba(251,191,36,0.6)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional recognitions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="rounded-lg p-4"
          style={{ background: '#0a0a0a', border: '1px solid #1a1a1a' }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 mb-3 uppercase">Team & Collaborators</p>
          <div className="flex flex-wrap gap-2">
            {['Jacob Blakely', 'Reyna Alam', 'Chetan Tripaathi', 'Mentor: Reva Baglane'].map(name => (
              <span key={name} className="font-mono text-[10px] px-2.5 py-1 rounded"
                style={{ background: '#111', border: '1px solid #1e1e1e', color: 'rgba(255,255,255,0.35)' }}>
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 53 reactions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex items-center gap-3 rounded-lg p-3"
          style={{ background: '#0a0a0a', border: '1px solid #1a1a1a' }}
        >
          <span className="text-lg">👏</span>
          <div>
            <p className="font-mono text-xs text-neutral-400">53 reactions on LinkedIn</p>
            <p className="font-mono text-[10px] text-neutral-600 mt-0.5">4 comments · 2 reposts</p>
          </div>
        </motion.div>
      </div>
    </ModalBase>
  )
}
