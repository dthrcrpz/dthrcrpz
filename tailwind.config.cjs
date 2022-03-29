module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#06b6d4',
        'secondary': '#4338ca',
        'tertiary': '#ea580c',
        'danger': '#be123c'
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
