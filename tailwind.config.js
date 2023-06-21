/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        // Add your custom color schemes here
        'my-color' : '#00ff55',
      },

      fontFamily: {
        custom: ["Roboto Mono"," monospace !important"],
      },
      backgroundColor : {
        'my-dark' : "hsl(222.2 47.4% 11.2%)",
      },
      borderColor : {
        'my-border' : "hsl(215.4 16.3% 56.9%)",
      }
    },
  },



  plugins: [],
}
