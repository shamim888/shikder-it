/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        lato: ["Lato", 'sans-serif'],
        roboto:["Roboto",'sans-serif'],
      },

      colors: {
        logic: {
          pest: '#1b8b7e',
          color3:'#0D4841',
          blue0:'#0d8fd4',
          blue1:'#284595',
          blue2:'#2456a3',
          blue3:'#1c61ae',
          blue4:'#6592c7',
          blue5:'#70bfe5',
          blue6:'#4085c2',
          blue7:'#94a4cc',
          blue8:'#eff1f2',
          black:'#1a1a1a',
        },
        shikder: {
          primary: '#ff6138',
          secondary: '#44557b',
          dark: '#CC4E2D',
          light: '#FF7443',
          coral01: '#FD7552',
          coral02: '#FD7F5E',
          coral03: '#FD896A',
          coral04: '#FD9E84',
          coral05: '#FDB5A1',
          coral06: '#FED3C7',
          coral07: '#FEE8E1',
          coral08: '#FEEEE9',
          coral09: '#FEF4F1',
          coral10: '#FFFAF9',
        }
      },

      animation: {
        'gradient': 'gradient 5s linear infinite',
      },


      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        },
      },
      
      
    },
  },
  plugins: [],
}
