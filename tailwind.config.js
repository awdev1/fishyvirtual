// tailwind.config.js
module.exports = {
  content: [
    // Your content paths here
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#F6C23E',
        'custom-gray': '#343A40',
        'custom-blue': '#007BFF',
      },
      backgroundImage: {
        'virtual-airline': "url('../public/image.png')",
      },
    },
  },
  plugins: [],
}
