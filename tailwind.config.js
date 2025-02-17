/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    fontFamily: {
      mono: ['"JetBrains Mono"', 'monospace'],
    },
    extend: {
      colors: {
        green: {
          250: '#a2f7ae' // btn, character num, copy icon
        },
        neutral: {
          175: '#e6e5ea', // font colour
          450: '#878495', // Title, "Strength"
          575: '#58575f', // Generated password
          825: '#24232b', // form bg
          875: '#18171f', // "Strength" bg, range bg
          925: '#121117' // main bg
        },
        orange: {
          550: '#f6cd69'
        },
        red: {
          575: '#dd4c4c'
        }
      }
    }
  },
  plugins: []
}

