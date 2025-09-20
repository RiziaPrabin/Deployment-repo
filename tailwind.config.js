/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'pirate': ['Creepster', 'cursive'],
      },
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        pirate: {
          gold: '#FFD700',
          'dark-gold': '#B8860B',
          red: '#8B0000',
          'dark-red': '#5C0000',
          black: '#1C1C1C',
          'dark-black': '#0F0F0F',
          brown: '#8B4513',
          'dark-brown': '#654321',
          cream: '#F5F5DC',
          'dark-cream': '#DDD8C0',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'treasure-glow': 'treasureGlow 2s ease-in-out infinite alternate',
        'skull-bounce': 'skullBounce 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        treasureGlow: {
          '0%': { boxShadow: '0 0 5px #FFD700' },
          '100%': { boxShadow: '0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
        skullBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundImage: {
        'pirate-pattern': "url('data:image/svg+xml,<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"%23FFD700\" fill-opacity=\"0.1\"><polygon points=\"20,0 40,20 20,40 0,20\"/></g></svg>')",
        'treasure-map': "url('data:image/svg+xml,<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"%23DDD8C0\" opacity=\"0.3\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"%23DDD8C0\" opacity=\"0.3\"/><circle cx=\"50\" cy=\"10\" r=\"1\" fill=\"%23DDD8C0\" opacity=\"0.3\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
      },
    },
  },
  plugins: [],
}