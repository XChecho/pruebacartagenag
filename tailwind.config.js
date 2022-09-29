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
        fifth: '#55BAC2',
        layout: '#BDD1D8'
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
        fifth: '#55BAC2',
        load: '#737373'
      },
      screens: {
        'small': '320px'
      },
      gridTemplateColumns:{
        'auto-fill': 'repeat(auto-fill, 320px)',
        'auto-fit': 'repeat(auto-fit, 320px)',
        'auto1fr': '5fr 2fr 1fr', 
        'at1fatat' : 'auto 1fr 0.5fr auto auto',
      },
      width : {
        '125':'500px',
        '140':'35rem',
        '160':'40rem',
        '168':'42rem',
        '400':'400%',
        '19/20':'95%'
      },
      height :{
        '75':'300px',
        '100':'400px',
        '120': '30rem'
      },
      maxHeight :{
        '160':'40rem',
      },
      textShadow: {
        '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
        '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
      boxShadow: {
        'load': '0 0 5px rgb(255,255,255,.3)',
      },
      animation: {
        'ring-load': 'ring 2s linear infinite',
        'slider':'change 20s infinite ',
      },
      keyframes: {
        'ring' : {
          '0%': { 
            transform: 'rotate(0deg)', 
            boxShadow: '1px 5px 2px #347175'
          },
          '50%': { 
            transform: 'rotate(180deg)', 
            boxShadow: '1px 5px 2px #55BAC2'
          },
          '100%': { 
            transform: 'rotate(360deg)', 
            boxShadow: '1px 5px 2px #0456C8'
          },
        },
        'change' :{
          '0%': {transform: 'translateX(0)'},
          '20%': {transform: 'translateX(0)'},
          '25%': {transform: 'translateX(-25%)'},
          '45%': {transform: 'translateX(-25%)'},
          '50%': {transform: 'translateX(-50%)'},
          '70%': {transform: 'translateX(-50%)'},
          '75%': {transform: 'translateX(-75%)'},
          '95%': {transform: 'translateX(-75%)'},
          '100%': {transform: 'translateX(0)'}
        },
      },
    },
  },
  variants: {
    width:["responsive", "hover", "focus"],
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
