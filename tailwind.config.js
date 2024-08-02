tailwind.config ={
  content: ["*"],
  theme: {
    colors: {
      'VeryDarkBlue': 'hsl(212, 21%, 14%)',
      'DarkGrayishBlue': 'hsl(228, 12%, 48%)',
      'White': 'hsl(0, 0%, 100%)',
      'DarkCyan': 'hsl(158, 36%, 37%)',
      'Cream': 'hsl(30, 38%, 92%)'
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      maxWidth:{
        'custom': '640px',
      }
    },
  },
  plugins: [],
}
