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
        'ubuntu-mono': ['Ubuntu Mono', 'monospace'],
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
