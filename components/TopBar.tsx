'use client'
import { motion } from 'framer-motion'
import type { ModalType } from '@/app/page'

export default function TopBar({ onNav }: { onNav: (t: ModalType) => void }) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-4"
      style={{
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.98), rgba(10,10,10,0))',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-amber-glow animate-pulse-amber" style={{ boxShadow: '0 0 8px rgba(245,158,11,0.8)' }} />
        <span className="font-mono text-xs tracking-[0.3em] text-neutral-500 uppercase">
          Aryan Aryan
        </span>
        <span className="font-mono text-xs text-bench-border">·</span>
        <span className="font-mono text-xs tracking-[0.2em] text-amber-glow/60 uppercase">
          Engineer's Workbench
        </span>
      </div>

      {/* Nav pills */}
      <nav className="flex items-center gap-1">
        {[
          { label: 'About', type: 'about' as ModalType },
          { label: 'Education', type: 'education' as ModalType },
          { label: 'Awards', type: 'awards' as ModalType },
        ].map((item) => (
          <button
            key={item.type}
            onClick={() => onNav(item.type)}
            data-hoverable
            className="px-4 py-1.5 rounded font-mono text-xs tracking-widest text-neutral-500 hover:text-amber-glow transition-colors duration-200 uppercase"
            style={{ letterSpacing: '0.15em' }}
          >
            {item.label}
          </button>
        ))}
        <a
          href="https://github.com/aryanaryan"
          target="_blank"
          rel="noopener noreferrer"
          data-hoverable
          className="ml-4 px-4 py-1.5 rounded font-mono text-xs tracking-widest border border-bench-border text-neutral-500 hover:text-amber-glow hover:border-amber-glow/40 transition-all duration-200 uppercase"
        >
          GitHub ↗
        </a>
      </nav>
    </motion.header>
  )
}
