module.exports = {
	content: ['./src/**/*.{astro,html,js,svelte,ts,css}'],
	theme: {
    extend: {
      colors: {
        'primary': '#06b6d4',
        'secondary': '#4338ca',
        'tertiary': '#ea580c',
        'danger': '#be123c',
        'dark': '#1e293b'
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
