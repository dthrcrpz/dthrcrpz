module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"
  ],
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
        'comic-code': ['Comic Code Ligatures', 'monospace'],
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}