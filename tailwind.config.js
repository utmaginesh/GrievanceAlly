/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "button-primary": "#c2c6c2",
        "button-primary-hover": "#B9CAB8",
      },
    },
  },
  plugins: [],
}

