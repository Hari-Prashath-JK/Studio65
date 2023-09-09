/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'indexHero' : 'url("/Images/Home/hero.png")',
        'indexReview' : "url('Images/Home/review.png')",
      }
    },
    fontFamily : {
      'kalam' : ['Kalam', 'cursive'],
      'serif' : ['League Spartan', 'sans-serif'],
      'spartan' : ['League Spartan', 'sans-serif'],
      'oleo' : ['Oleo Script', 'cursive'],
      'Parisienne' : ['Parisienne', 'cursive'],
      'Tangerine' : ['Tangerine', 'cursive']
    }
  },
  plugins: [],
}

