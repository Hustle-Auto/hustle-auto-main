module.exports = {
<<<<<<< HEAD
  theme: {
    fontFamily: {
      heading: ['Inconsolata', 'sans-serif'],
      paragraph: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#EF4444',
          50: '#FDEDED',
          100: '#FCDADA',
          200: '#F9B5B5',
          300: '#F58F8F',
          400: '#F26A6A',
          500: '#EF4444',
          600: '#E71414',
          700: '#B30F0F',
          800: '#800B0B',
          900: '#4C0707',
        },
      },
      backgroundImage: {
        logo: "url('~/assets/imgs/logo.svg')",
=======
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ef4444',
>>>>>>> main
      },
    },
  },
  plugins: [],
}
