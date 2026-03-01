'use client'
import ModalBase from './ModalBase'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Course Lead & Web Dev Lead',
    org: 'CS124H — Siebel School',
    period: 'Aug 2025 – Present',
    stack: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'Google OAuth'],
    metric: '200+ students',
    bullets: [
      'Co-led Illinois\' largest undergraduate-run CS course supporting 200+ students',
      'Deployed full-stack event + QR check-in system with Supabase (PostgreSQL) backend',
      'Automated attendance-to-points workflows for 150+ students across 20+ technical events',
      'Implemented Google OAuth with role-based access control and protected admin dashboards',
      'Led development of production-grade Next.js platform serving active course operations',
    ],
  },
  {
    title: 'Project Manager',
    org: 'CS124H — Android Calorie Tracker',
    period: 'Aug – Dec 2025',
    stack: ['Java', 'Android', 'Python', 'REST API', 'Web Scraping'],
    metric: '4 dining halls',
    bullets: [
      'Led 6-person team building Android calorie tracking app for 4 UIUC dining halls',
      'Built Python web-scraping pipeline to extract weekly menu data and serialize structured JSON',
      'Integrated REST APIs to synchronize backend and maintain 100+ live menu records weekly',
    ],
  },
  {
    title: 'Mobile App Developer',
    org: 'VisitMind · Internship',
    period: 'May – Jul 2024',
    stack: ['Android Studio', 'AWS SES', 'Java', 'DevOps'],
    metric: '127 → 273 users',
    bullets: [
      'Implemented API mailing system using Amazon SES — resulted in 40% increase in service demos',
      'Refactored Android app performance, reducing load times and fixing memory leaks',
      'Grew active users from 127 to 273 within 3 months',
    ],
  },
]

const aiProjects = [
  { label: 'YOLOv8 Object Detection', metric: 'mAP ≈ 0.70', detail: 'Autonomous driving dataset' },
  { label: 'Warehouse KPI Analytics', metric: '96.3% coverage', detail: '3,204 SKUs · Python + AI' },
  { label: 'Inventory Forecasting', metric: '~40% faster', detail: 'Node-RED + reorder logic' },
  { label: 'LLM Workshops', metric: '5+ sessions', detail: 'AI agents, full-stack arch' },
]

export default function SoftwareModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalBase
      onClose={onClose}
      accentColor="#60a5fa"
      accentRgb="96,165,250"
      title="SOFTWARE & AI"
      subtitle="AI/ML & Architecture · Dashboard"
    >
      <div className="space-y-5">

        {/* AI metric cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="grid grid-cols-2 gap-3"
        >
          {aiProjects.map((m, i) => (
            <div key={i} className="rounded-lg p-4"
              style={{ background: '#0a0d14', border: '1px solid rgba(96,165,250,0.1)' }}>
              <p className="font-mono text-[10px] tracking-widest mb-1"
                style={{ color: 'rgba(96,165,250,0.5)' }}>{m.label}</p>
              <p className="font-display text-2xl tracking-wider"
                style={{ color: '#60a5fa', textShadow: '0 0 12px rgba(96,165,250,0.4)' }}>{m.metric}</p>
              <p className="font-mono text-[10px] text-neutral-600 mt-0.5">{m.detail}</p>
            </div>
          ))}
        </motion.div>

        {/* Experience cards */}
        {experiences.map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 + 0.15 }}
            className="rounded-lg p-5"
            style={{ background: '#0f0f0f', border: '1px solid #1e1e1e' }}
          >
            <div className="flex gap-4">
              <div className="w-0.5 flex-shrink-0 self-stretch rounded-full"
                style={{ background: 'rgba(96,165,250,0.35)' }} />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl tracking-wider text-white">{p.title}</h3>
                    <p className="font-mono text-xs mt-0.5 tracking-widest"
                      style={{ color: 'rgba(96,165,250,0.6)' }}>{p.org} · {p.period}</p>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-1 rounded flex-shrink-0"
                    style={{ background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.15)', color: 'rgba(96,165,250,0.8)' }}>
                    {p.metric}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 my-3">
                  {p.stack.map(s => (
                    <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded tracking-widest"
                      style={{ background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.12)', color: 'rgba(96,165,250,0.7)' }}>
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
                      <span className="flex-shrink-0 mt-0.5" style={{ color: 'rgba(96,165,250,0.4)' }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </ModalBase>
  )
}
