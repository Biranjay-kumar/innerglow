/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-violet': '#7f56d9',
        'serene-blue': '#4f84c2',
        'fresh-green': '#60a84e',
        'warm-sand': '#f1e1c6',
        'soft-coral': '#f89a8b',
        'dark-slate': '#2d3748',
        'light-beige': '#f8f4f1',
      },
    },
  },
  plugins: [],
}