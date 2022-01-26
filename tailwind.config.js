module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: ['active'],
      fontFamily: {
        roboto: ['Roboto', 'sans serif'],
        poppins: ['Poppins', 'sans serif'],
      },
      colors: {
        purple: '#5F2788',
        darkpurple: '#391553',
        fusia: '#B366EB',
        lightpurple: '#F7F4F9',
        grey: '#EEEEEE',
        darkgrey: '#5C5C5C',
        white: '#FFFFFF',
        black: '#000000',
        red: '#FF0000',
        darkred: '#ED0000',
        yellow: '#FFFF00',
        green: '#00FF00',
      },
      width: {
        100: '27rem',
      },
    },
  },
  plugins: [],
}
