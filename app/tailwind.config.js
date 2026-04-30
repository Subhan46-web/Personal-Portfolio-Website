/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#080B14',
        surface: '#0D1220',
        card: '#111827',
        border: '#1E2A3A',
        accent: '#38BDF8',
        accent2: '#818CF8',
        muted: '#4B5A72',
        text: '#E2E8F0',
        subtle: '#94A3B8',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.7s ease forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56,189,248,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(56,189,248,0.6)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)",
        'hero-gradient': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(56,189,248,0.15), transparent)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
