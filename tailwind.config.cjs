module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'teal': '#5CE0D8',
        'dark-teal': '#22b4ab',
        'dark-blue': '#1A2238',
        'yellow': '#FFCF43',
        'red': '#ff5757'
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'teal': '0px 0px 7px rgba(92, 224, 216, 0.3)',
        'teal-glow': '0px 0px 10px rgba(92, 224, 216, 0.6)' 
      }
    },
  },
  plugins: [],
}
