module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['font-bold tracking-tight', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        '3d': '4px 4px 10px rgba(0, 0, 0, 0.2), -2px -2px 5px rgba(255, 255, 255, 0.3)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
