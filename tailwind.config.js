/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red : {
            50: '#F16A6A',
            100: '#F15757',
          },
          yellow: {
            100: '#F88E12',
          },
          light: {
            100: '#F6F6F9',
          },
        },
        secondary: {
          blue: {
            100: '#2B71FA',
          },
          light: {
            100: '#F6F6F9',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      boxShadow: {
        'dekstop': '0px 13px 29px 0px',
        'mobile': '0px 4.313px 10.063px 0px',
      },
      boxShadowColor: {
        'orange-dekstop': 'rgba(245, 192, 132, 0.10), 0px 53px 53px 0px rgba(245, 192, 132, 0.09), 0px 119px 71px 0px rgba(245, 192, 132, 0.05), 0px 212px 85px 0px rgba(245, 192, 132, 0.01), 0px 331px 93px 0px rgba(245, 192, 132, 0.00)',
        'orange-mobile': 'rgba(251, 177, 136, 0.10), 0px 17.25px 17.25px 0px rgba(251, 177, 136, 0.09), 0px 40.25px 24.438px 0px rgba(251, 177, 136, 0.05), 0px 70.438px 28.75px 0px rgba(251, 177, 136, 0.01), 0px 110.688px 30.188px 0px rgba(251, 177, 136, 0.00)',
      },
    },
  },
  plugins: [],
}
