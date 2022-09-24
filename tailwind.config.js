module.exports = {
  content: [
    "./public/index.html", "./src/**/*.{html,jsx}",
  ],
  darkMode: 'false', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        white: '#FFFFFF',
        black: '#000000',
        primary: '#347175',
        second: '#B6F2F7',
        third: '#6CECF5',
        fourth: '#577375',
        fifth: '#55BAC2'
      },
      fontSize: {
        xsm: ['10px'],
        sma: ['14px'],
        med: ['16px'],
        lag: ['18px'],
        xlg: ['22px']
      },
      textColor:{
        primary: '#347175',
        second: '#B6F2F7',
        third: '#6CECF5',
        fourth: '#577375',
        fifth: '#55BAC2'
      },
      screens: {
        'small': '320px'
      },
      gridTemplateColumns:{
        'auto-fill': 'repeat(auto-fill, 320px)',
        'auto1fr': 'auto 1fr',
        'at1fatat' : 'auto 1fr auto auto',
      },
      width : {
        '128':'30rem'
      },
      height :{
        '128': '30rem'
      },
      textShadow: {
        '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
        '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
    },
  },
  variants: {
    width:["responsive", "hover", "focus"],
    extend: {
    },
  },
  plugins: [],
}
