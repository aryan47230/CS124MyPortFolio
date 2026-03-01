'use client'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

function NeuralGrid({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const tRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const nodes: { x: number; y: number; phase: number }[] = []
    const W = canvas.width
    const H = canvas.height
    const cols = 6, rows = 4

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        nodes.push({
          x: (c + 0.5) * (W / cols),
          y: (r + 0.5) * (H / rows),
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    const draw = () => {
      tRef.current += active ? 0.04 : 0.015
      const t = tRef.current
      ctx.clearRect(0, 0, W, H)

      // Background
      ctx.fillStyle = '#030810'
      ctx.fillRect(0, 0, W, H)

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const ni = nodes[i], nj = nodes[j]
          const dx = ni.x - nj.x, dy = ni.y - nj.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > W * 0.42) continue

          const pulse = (Math.sin(t + ni.phase + nj.phase * 0.5) + 1) / 2
          const alpha = (active ? 0.5 : 0.15) * pulse * (1 - dist / (W * 0.42))

          ctx.beginPath()
          ctx.strokeStyle = `rgba(59,130,246,${alpha})`
          ctx.lineWidth = 0.8
          ctx.moveTo(ni.x, ni.y)
          ctx.lineTo(nj.x, nj.y)
          ctx.stroke()
        }
      }

      // Nodes
      nodes.forEach((n) => {
        const glow = (Math.sin(t + n.phase) + 1) / 2
        const r = active ? 3 + glow * 2 : 2

        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fillStyle = active
          ? `rgba(96,165,250,${0.6 + glow * 0.4})`
          : 'rgba(59,130,246,0.3)'
        ctx.shadowBlur = active ? 10 : 4
        ctx.shadowColor = '#3b82f6'
        ctx.fill()
        ctx.shadowBlur = 0
      })

      frameRef.current = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(frameRef.current)
  }, [active])

  return <canvas ref={canvasRef} width={200} height={120} className="w-full h-full" />
}

export default function Laptop({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative flex flex-col items-center gap-2 cursor-none"
      data-hoverable
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
        className="object-label"
        style={{ color: 'rgba(96,165,250,0.7)' }}
      >
        SOFTWARE & AI
      </motion.div>

      <motion.div
        whileHover={{ y: -3 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        {/* Lid / screen */}
        <div
          className="relative mx-4 rounded-t-lg overflow-hidden"
          style={{
            width: 220,
            height: 148,
            background: 'linear-gradient(160deg, #1a1a1a, #111)',
            border: '1px solid #2a2a2a',
            borderBottom: 'none',
            boxShadow: hovered
              ? '0 0 30px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.05)'
              : 'inset 0 1px 0 rgba(255,255,255,0.03)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 rounded-b bg-bench-bg" />

          {/* Screen bezel */}
          <div className="absolute inset-2 rounded overflow-hidden"
            style={{ background: '#030810', border: '1px solid #0a0a0a' }}>
            <NeuralGrid active={hovered} />
            {/* Status line */}
            <div className="absolute bottom-0 left-0 right-0 px-2 py-0.5"
              style={{ background: 'rgba(3,8,16,0.9)', borderTop: '1px solid rgba(59,130,246,0.1)' }}>
              <span className="font-mono text-[8px] text-blue-400/60 tracking-widest">
                {hovered ? '▶ MODEL INFERENCE ACTIVE' : '● STANDBY · NEURAL NET v2.1'}
              </span>
            </div>
          </div>

          {/* Apple-style logo glow */}
          <div className="absolute top-1 right-2 w-2 h-2 rounded-full"
            style={{
              background: hovered ? 'rgba(96,165,250,0.4)' : 'rgba(96,165,250,0.1)',
              boxShadow: hovered ? '0 0 8px rgba(96,165,250,0.6)' : 'none',
              transition: 'all 0.3s ease',
            }}
          />
        </div>

        {/* Base / keyboard */}
        <div
          className="relative mx-1 rounded-b-xl"
          style={{
            width: 236,
            height: 18,
            background: 'linear-gradient(180deg, #1e1e1e, #171717)',
            border: '1px solid #2a2a2a',
            boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
          }}
        >
          {/* Touchpad */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-3 rounded-sm"
            style={{ background: '#151515', border: '1px solid #222' }} />

          {/* Keyboard rows hint */}
          {[0.3, 0.55].map((y, i) => (
            <div key={i} className="absolute flex gap-0.5"
              style={{ top: `${y * 100}%`, left: '5%', transform: 'translateY(-50%)' }}>
              {Array.from({ length: 22 }).map((_, k) => (
                <div key={k} className="w-1 h-1 rounded-[1px]"
                  style={{ background: 'rgba(255,255,255,0.04)' }} />
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <p className="font-mono text-[9px] text-neutral-700 tracking-widest text-center">
        NEXT.JS · PYTORCH · ROS 2 · AI/ML
      </p>
    </div>
  )
}
