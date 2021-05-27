module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./src/**/*.js', './src/**/*.mdx', './src/**/*.tsx'],
    options: {
      safelist: ['dark'],
    },
  },
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        blue: {
          950: '#242C42',
        },
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white',
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
