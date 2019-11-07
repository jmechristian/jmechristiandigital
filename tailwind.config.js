module.exports = {
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#090E24',
        secondary: '#4BFFA5',
        highlight: '#F3EE1B',
        lowlight: '#59C9DC'
      }
    }
  },
  variants: {},
  plugins: [
    ({ addComponents }) => {
      const AppLogo = {
        '.App-logo': {
          animation: 'App-logo-spin infinite 20s linear',
          height: '40vmin',
          'pointer-events': 'none'
        },
        '@keyframes App-logo-spin': {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        }
      };
      addComponents(AppLogo);
    }
  ]
};
