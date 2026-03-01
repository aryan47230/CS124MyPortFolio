'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ModalProps {
  onClose: () => void
  accentColor: string
  accentRgb: string
  title: string
  subtitle: string
  children: ReactNode
}

export default function ModalBase({ onClose, accentColor, accentRgb, title, subtitle, children }: ModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 overlay-backdrop" />

      {/* Panel */}
      <motion.div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl"
        initial={{ scale: 0.92, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 10, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(160deg, #111 0%, #0d0d0d 100%)',
          border: `1px solid rgba(${accentRgb}, 0.2)`,
          boxShadow: `0 0 0 1px rgba(${accentRgb}, 0.05), 0 30px 80px rgba(0,0,0,0.9), 0 0 40px rgba(${accentRgb}, 0.08)`,
        }}
      >
        {/* Corner screws */}
        {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map(p => (
          <div key={p} className={`absolute ${p} screw`} />
        ))}

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4"
          style={{ borderBottom: `1px solid rgba(${accentRgb}, 0.1)` }}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full"
                style={{ background: accentColor, boxShadow: `0 0 6px ${accentColor}` }} />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase"
                style={{ color: `rgba(${accentRgb}, 0.6)` }}>
                {subtitle}
              </span>
            </div>
            <h2 className="font-display text-3xl tracking-wider text-white">{title}</h2>
          </div>
          <button
            onClick={onClose}
            data-hoverable
            className="w-8 h-8 rounded flex items-center justify-center font-mono text-neutral-600 hover:text-white transition-colors"
            style={{ border: '1px solid #2a2a2a', background: '#111' }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}
