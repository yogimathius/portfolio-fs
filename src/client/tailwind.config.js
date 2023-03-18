module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '1': '1px'
      },
      colors: {
        'cyan': '#5FB4A2',
        'dark-blue': '#203A4C',
        'gray-dk-blue': '#33323D',
        'light-grey': '#FAFAFA',
        'light-grey-text': '#EAEAEB',
        'bright-red': '#F43030'
      },
      height: {
        '75-screen': '75vh',
        '85-screen': '85vh'
      },
      backgroundImage: theme => ({
        'hero': "url('/src/assets/images/header-background.jpg')",
      }),
      fontFamily: {
        'body': ['Public Sans', 'serif'],
        'header': ['Ibarra Real Nova', 'sans-serif']
      },
      stroke: theme => ({
        'cyan': theme('colors.cyan'),
        // 'green': theme('colors.green.500'),
        // 'blue': theme('colors.blue.500'),
      }),
      fill: theme => ({
        'cyan': theme('colors.cyan'),
        // 'green': theme('colors.green.500'),
        // 'blue': theme('colors.blue.500'),
      })
    },  
  },
  variants: {
    extend: {
      fill: ['hover', 'focus']
    },
  },
  plugins: [],
}
