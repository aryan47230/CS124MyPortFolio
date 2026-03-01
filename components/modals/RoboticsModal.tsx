'use client'
import ModalBase from './ModalBase'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Autonomous Driving Pipeline',
    org: 'Illini EV Concept',
    period: 'Jan 2025 – Dec 2025',
    stack: ['ROS 2', 'YOLOv8', 'LiDAR', 'PyTorch', 'OpenCV'],
    bullets: [
      'Built autonomous perception pipeline in ROS 2 (Humble) + Gazebo with lane detection and YOLOv8 object detection over camera and LiDAR streams',
      'Developed A*-based path-planning connecting perception outputs to ROS planning nodes — validated collision-free trajectories in RViz',
      'Achieved IoU > 0.65 and mAP ≈ 0.70 on public autonomous-driving datasets',
      'Implemented core ML components (loss functions, gradient descent) from scratch in Google Colab',
    ],
    accent: '#f59e0b',
  },
  {
    title: 'PID Wall-Following & Obstacle Avoidance',
    org: 'SIGRobotics @ UIUC',
    period: 'Jan 2026 – Present',
    stack: ['ROS 2', 'PID Control', 'LaserScan', 'C++', 'Follow The Gap'],
    bullets: [
      'Developed autonomous navigation using PID controllers for wall-following and reactive "Follow the Gap" for real-time obstacle avoidance',
      'Engineered safety-critical nodes using LaserScan data to calculate Instantaneous Time to Collision (iTTC)',
      'Enabled automatic emergency braking at high velocities for safety-critical scenarios',
    ],
    accent: '#f59e0b',
  },
]

export default function RoboticsModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalBase
      onClose={onClose}
      accentColor="#f59e0b"
      accentRgb="245,158,11"
      title="ROBOTICS"
      subtitle="Schematics & Mechanical · Project Gallery"
    >
      <div className="space-y-5">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 + 0.1 }}
            className="rounded-lg p-5"
            style={{
              background: '#0f0f0f',
              border: '1px solid #1e1e1e',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            }}
          >
            {/* Left amber bar */}
            <div className="flex gap-4">
              <div className="w-0.5 rounded-full flex-shrink-0 self-stretch"
                style={{ background: 'rgba(245,158,11,0.4)' }} />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-display text-xl tracking-wider text-white">{p.title}</h3>
                    <p className="font-mono text-xs text-amber-glow/60 tracking-widest mt-0.5">{p.org} · {p.period}</p>
                  </div>
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map(s => (
                    <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded tracking-widest"
                      style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)', color: 'rgba(245,158,11,0.7)' }}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
                      <span className="text-amber-glow/40 flex-shrink-0 mt-0.5">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="rounded-lg p-4"
          style={{ background: '#0a0a0a', border: '1px solid #1a1a1a' }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 mb-3 uppercase">Core Competencies</p>
          <div className="grid grid-cols-3 gap-2">
            {['Autonomous Navigation', 'Computer Vision', 'Path Planning', 'PID Control', 'Sensor Fusion', 'ROS 2 Architecture'].map(skill => (
              <div key={skill} className="font-mono text-xs text-neutral-500 py-1.5 px-2 rounded"
                style={{ background: '#111', border: '1px solid #1e1e1e' }}>
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </ModalBase>
  )
}
