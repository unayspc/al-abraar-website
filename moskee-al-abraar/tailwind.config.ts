import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5E3B',
          light: '#2D7A54',
          dark: '#0D3D26',
          50: '#f0faf5',
          100: '#d9f2e6',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#DFC27A',
          dark: '#A8872A',
          50: '#fdf8ec',
        },
        cream: {
          DEFAULT: '#F8F4EF',
          dark: '#EDE6DB',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          light: '#141414',
          card: '#111827',
          surface: '#1a1a2e',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
        heading: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}

export default config
