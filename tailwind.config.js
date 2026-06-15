/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#E8F0FE',
          100: '#D2E3FC',
          200: '#A8CAF8',
          300: '#74A9F4',
          400: '#4A8CF0',
          500: '#1A73E8',
          600: '#1557B0',
          700: '#0F3E80',
          800: '#0A2A5A',
          900: '#051735',
        },
        success: {
          50: '#E6F4EA',
          100: '#CEEAD6',
          500: '#34A853',
          600: '#1E8E3E',
        },
        neutral: {
          50: '#F5F7FA',
          100: '#E8EAED',
          200: '#DADCE0',
          300: '#BDC1C6',
          400: '#9AA0A6',
          500: '#80868B',
          600: '#5F6368',
          700: '#3C4043',
          800: '#333333',
          900: '#202124',
        },
      },
      fontFamily: {
        serif: ['"Source Han Serif CN"', '"Noto Serif SC"', 'serif'],
        sans: ['"Source Han Sans CN"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
