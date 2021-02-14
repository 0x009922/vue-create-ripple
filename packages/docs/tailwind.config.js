module.exports = {
  theme: {
    extend: {
      listStyleType: {
        circle: 'circle'
      },
      transitionTimingFunction: {
        'md-standard': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      },
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'visited'],
    padding: ['responsive', 'hover'],
    // margin: ['responsive', 'visited'],
    opacity: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [
    require('tailwindcss-elevation')(['active'])
  ]
}