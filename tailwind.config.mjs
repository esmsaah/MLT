/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Match the concept exactly: classic Georgia serif + system sans.
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Arial', 'Helvetica', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Exact palette taken from the approved concept
        ink: '#17211b', // primary dark text
        parchment: '#f2eee4', // light background
        cream: '#fbfaf5', // lighter card background
        sand: '#ebe4d5', // subtle band background
        forest: '#0f1712', // hero / dark section background
        forest2: '#18271f', // dark section alt
        brick: '#9f2e26', // red accent / buttons
        gold: '#c9a85e', // gold accent
        muted: '#abb1ac', // muted text on dark
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
