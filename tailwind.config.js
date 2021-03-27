const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./dist/**/*.html", "./dist/**/*.js"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      zIndex: {
        'negative':'-1'
      },
      colors: {
        'cyan': colors.cyan,
        'fuchsia': colors.fuchsia,
        'lightblue': colors.lightBlue,
        'orange': colors.orange,
        'amber': colors.amber,
        'brand': '#181818',
        'theynetwork':'#C11818'
      }
    },
    transitionTimingFunction: {
      'bloop': "cubic-bezier(1,-0.65,0,2.31)"
    }
  },
  variants: {
   
    extend: {
       backgroundColor:['active'],
       display:['hover'],
       scale:['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ],
};


