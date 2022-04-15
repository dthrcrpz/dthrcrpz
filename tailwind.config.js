module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.svelte',
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
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
        'fira-code': ['Fira Code', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}