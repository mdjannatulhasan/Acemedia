module.exports = {
  purge: [
    './public/**/*.html',
     './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center:'true',
      padding: '2rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1314px',
    },
    extend: {
      colors:{
        primary:'#ee5963',
        heading: '#3B413C',
        body: '#44474B',
        grayShed: 'rgba(0, 0, 0, 0.63)',
      },
      backgroundImage: theme => ({
        // 'hero-bg': "linear-gradient(90deg, rgba(0, 0, 0, 0.5015) 0%, rgba(0, 0, 0, 0.3485) 100%),url('../images/hero.png')",
        // 'hero-bg-2': "linear-gradient(to right bottom, rgba(0, 0, 0,0.63), rgba(0, 0, 0,0.63)),url('../images/hero-bg-2.png')",
        // 'sec-bg': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),url('../images/third-sec-bg.png')",
        // 'shedding': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46))",
        // 'pizza-bg': "url('../images/pizza-bg-2.png')",
       })
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
