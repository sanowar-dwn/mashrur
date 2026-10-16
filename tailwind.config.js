/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#101010",
        secondaryBg: "#191817",
        surfaceBg: "#141413",
        surfaceBorder: "#272522",
        primaryText: "#F4F0E8",
        accent: "#C8A66A",
        accentHover: "#D9B87E",
        mutedText: "#A5A19A",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 30%, rgba(200, 166, 106, 0.08) 0%, transparent 70%)',
        'radial-gold': 'radial-gradient(ellipse at center, rgba(200, 166, 106, 0.12) 0%, transparent 65%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
