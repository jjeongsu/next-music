/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6EB0EC',
        gray: '#C4C4C4',
        shade: '#092534',
      },
    },
    screens: {
      sm: { min: '390px', max: '819px' },
      md: { min: '820px', max: '1023px' },
      lg: { min: '1024px', max: '2400px' },
    },
    transitionProperty: {
      position: 'position',
    },
  },
  plugins: [],
  darkMode: 'class',
}
