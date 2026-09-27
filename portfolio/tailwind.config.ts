import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#0B0E13',
          900: '#10151C',
          800: '#161D27',
          700: '#1F2733',
          600: '#2B3644',
        },
        star: {
          400: '#6B7280',
          300: '#9CA3AF',
          200: '#C7CBD1',
          100: '#E7E9ED',
          50: '#F9FAFB',
        },
        cosmic: {
          blue: '#3B82F6',
          violet: '#8B5CF6',
          cyan: '#14B8A6',
          amber: '#F59E0B',
          rose: '#F43F5E',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(139,147,167,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,147,167,0.05) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 70px -18px rgba(155,123,255,0.4)',
        'glow-cyan': '0 0 70px -18px rgba(79,227,214,0.35)',
        'glow-blue': '0 0 70px -18px rgba(92,141,255,0.4)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '1' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        orbit: 'orbit 46s linear infinite',
        'orbit-slow': 'orbit 90s linear infinite',
        'orbit-reverse': 'orbit-reverse 60s linear infinite',
        drift: 'drift 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.2,0.6,0.4,1) infinite',
        aurora: 'aurora 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
