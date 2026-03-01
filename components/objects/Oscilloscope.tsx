'use client'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function Oscilloscope({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const tRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      tRef.current += hovered ? 0.08 : 0.03
      const t = tRef.current
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      // Background
      ctx.fillStyle = '#020f02'
      ctx.fillRect(0, 0, w, h)

      // Grid
      ctx.strokeStyle = 'rgba(74,222,128,0.08)'
      ctx.lineWidth = 0.5
      for (let i = 0; i <= 6; i++) {
        ctx.beginPath()
        ctx.moveTo(i * (w / 6), 0)
        ctx.lineTo(i * (w / 6), h)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, i * (h / 4))
        ctx.lineTo(w, i * (h / 4))
        ctx.stroke()
      }

      // Center line
      ctx.strokeStyle = 'rgba(74,222,128,0.15)'
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(0, h / 2)
      ctx.lineTo(w, h / 2)
      ctx.stroke()

      // Main waveform — composite signal
      const drawWave = (color: string, alpha: number, offsetT: number, freq: number, amp: number) => {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = 1.5
        ctx.shadowBlur = 6
        ctx.shadowColor = color

        for (let x = 0; x < w; x++) {
          const xn = x / w
          const y =
            h / 2 +
            amp * Math.sin(xn * freq * Math.PI * 2 + t + offsetT) +
            (amp * 0.3) * Math.sin(xn * freq * 2 * Math.PI * 2 + t * 1.3 + offsetT) +
            (amp * 0.15) * Math.sin(xn * freq * 5 * Math.PI * 2 + t * 0.7)

          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.globalAlpha = alpha
        ctx.stroke()
        ctx.globalAlpha = 1
        ctx.shadowBlur = 0
      }

      drawWave('rgba(74,222,128,0.9)', 1, 0, 3, h * 0.22)
      drawWave('rgba(74,222,128,0.3)', 0.5, 1.2, 5, h * 0.1)

      // PCB trace hints when hovered
      if (hovered) {
        ctx.strokeStyle = 'rgba(74,222,128,0.2)'
        ctx.lineWidth = 1
        ctx.setLineDash([2, 4] as number[])
        // Horizontal traces
        [h * 0.25, h * 0.5, h * 0.75].forEach(y => {
          ctx.beginPath()
          ctx.moveTo(10, y)
          ctx.lineTo(w - 10, y)
          ctx.stroke()
        })
        ctx.setLineDash([])
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(frameRef.current)
  }, [hovered])

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
        style={{ color: 'rgba(74,222,128,0.7)' }}
      >
        EMBEDDED SYSTEMS
      </motion.div>

      {/* Oscilloscope body */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative"
      >
        {/* Main chassis */}
        <div
          className="relative rounded-lg p-3"
          style={{
            width: 220,
            background: 'linear-gradient(160deg, #1c1c1c, #141414)',
            border: '1px solid #2a2a2a',
            boxShadow: hovered
              ? '0 0 24px rgba(74,222,128,0.15), inset 0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.8)'
              : 'inset 0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.8)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          {/* Brand text */}
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="font-mono text-[9px] text-neutral-600 tracking-widest">SCOPE-3000</span>
            <div className="flex gap-1">
              {[0,1,2].map(i => (
                <div key={i} className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: i === 0 ? (hovered ? '#4ade80' : '#166534') : '#1a1a1a',
                    boxShadow: i === 0 && hovered ? '0 0 6px rgba(74,222,128,0.8)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>

          {/* CRT Screen */}
          <div
            className="crt-screen rounded overflow-hidden"
            style={{
              width: '100%',
              height: 110,
              border: '2px solid #0a1a0a',
              boxShadow: hovered
                ? 'inset 0 0 20px rgba(74,222,128,0.15), 0 0 12px rgba(74,222,128,0.1)'
                : 'inset 0 0 10px rgba(0,0,0,0.8)',
            }}
          >
            <canvas ref={canvasRef} width={196} height={106} className="w-full h-full" />
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between mt-2 px-1">
            <div className="flex gap-2">
              {['CH1', 'CH2', 'TRIG'].map(label => (
                <button key={label} className="font-mono text-[8px] text-neutral-700 px-1.5 py-0.5 rounded"
                  style={{ background: '#111', border: '1px solid #222' }}>
                  {label}
                </button>
              ))}
            </div>
            {/* Knobs */}
            <div className="flex gap-2">
              {[0, 1].map(i => (
                <div key={i} className="w-5 h-5 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 40% 35%, #2a2a2a, #111)',
                    border: '1px solid #333',
                    boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.05), 0 1px 4px rgba(0,0,0,0.8)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* CH1/CH2 probe ports */}
          <div className="flex gap-2 mt-2 px-1">
            <div className="w-3 h-3 rounded-full" style={{ background: '#111', border: '1px solid #333' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#111', border: '1px solid #333' }} />
            <span className="ml-auto font-mono text-[8px] text-neutral-700">100MHz</span>
          </div>
        </div>
      </motion.div>

      <p className="font-mono text-[9px] text-neutral-700 tracking-widest text-center">
        FIRMWARE · CAN BUS · STM32 · LORA
      </p>
    </div>
  )
}
