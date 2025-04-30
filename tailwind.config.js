/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',  // Basic shadow
        'purple-glow': '2px 2px 20px rgba(148, 43, 226, 0.8)',  // Custom purple glow shadow
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')  // Plugin for text shadow if needed
  ],
}

