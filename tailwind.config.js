/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FEFCF8',
          100: '#FAF7F0',
          200: '#F5EFE3',
          300: '#EDE3D0',
        },
        sage: {
          50: '#EEF4EE',
          100: '#D6E8D7',
          200: '#AECFB0',
          300: '#83B286',
          400: '#6B8F6E',
          500: '#517554',
          600: '#3D5C40',
          700: '#2E4530',
        },
        navy: {
          50: '#EBF0F7',
          100: '#C8D6EA',
          200: '#8AAACF',
          300: '#5580B4',
          400: '#2E5A96',
          500: '#1E3A5F',
          600: '#162D4A',
          700: '#0F1F35',
        },
        coral: {
          50: '#FDF2EF',
          100: '#F9DDD6',
          200: '#F2B9A9',
          300: '#E8927C',
          400: '#D97060',
          500: '#C45540',
          600: '#A03D2A',
        },
        warm: {
          50: '#FEFAF6',
          100: '#FDF4EB',
          200: '#FAE8D2',
          300: '#F5D4AE',
        },
      },
      boxShadow: {
        soft: '0 2px 16px rgba(0,0,0,0.07)',
        card: '0 4px 24px rgba(0,0,0,0.08)',
        hover: '0 8px 32px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
