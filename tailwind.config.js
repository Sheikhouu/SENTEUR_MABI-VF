/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF1493',
        accent: '#FFD700',
        background: '#FAFAFA',
        text: '#333333'
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            h1: {
              fontFamily: theme('fontFamily.playfair'),
            },
            h2: {
              fontFamily: theme('fontFamily.playfair'),
            },
            h3: {
              fontFamily: theme('fontFamily.playfair'),
            },
            strong: {
              color: theme('colors.primary'),
            },
            blockquote: {
              borderLeftColor: theme('colors.primary'),
              fontStyle: 'italic',
            },
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};