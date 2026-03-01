/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'Courier New', 'monospace'],
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        bench: {
          bg: '#0a0a0a',
          surface: '#111111',
          panel: '#161616',
          border: '#2a2a2a',
          metal: '#1e1e1e',
        },
        amber: {
          glow: '#f59e0b',
          dim: '#92400e',
          soft: '#fbbf24',
        },
        green: {
          glow: '#22c55e',
          dim: '#14532d',
          crt: '#4ade80',
          phosphor: '#86efac',
        },
        blue: {
          neural: '#3b82f6',
          dim: '#1e3a5f',
        }
      },
      boxShadow: {
        'amber-glow': '0 0 20px rgba(245, 158, 11, 0.4), 0 0 60px rgba(245, 158, 11, 0.1)',
        'amber-sm': '0 0 8px rgba(245, 158, 11, 0.5)',
        'green-glow': '0 0 20px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.1)',
        'green-sm': '0 0 8px rgba(74, 222, 128, 0.5)',
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.1)',
        'metal': 'inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.8)',
        'inset-metal': 'inset 0 2px 4px rgba(0,0,0,0.6), inset 0 -1px 0 rgba(255,255,255,0.03)',
      },
      backgroundImage: {
        'metal-texture': 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 25%, #1a1a1a 50%, #0d0d0d 75%, #1a1a1a 100%)',
        'brushed-metal': 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.8' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.9' },
          '97%': { opacity: '1' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulse_amber: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(245,158,11,0.4)' },
          '50%': { boxShadow: '0 0 20px rgba(245,158,11,0.8), 0 0 40px rgba(245,158,11,0.3)' },
        },
        waveform: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        neural_pulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        arm_idle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-2deg)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.6' },
          '100%': { transform: 'translateY(-20px) scaleX(1.5)', opacity: '0' },
        },
      },
      animation: {
        flicker: 'flicker 4s infinite',
        scanline: 'scanline 8s linear infinite',
        pulse_amber: 'pulse_amber 2s ease-in-out infinite',
        waveform: 'waveform 4s linear infinite',
        neural_pulse: 'neural_pulse 2s ease-in-out infinite',
        arm_idle: 'arm_idle 3s ease-in-out infinite',
        steam: 'steam 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
