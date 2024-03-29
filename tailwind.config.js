module.exports = {
  purge: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    screens: {
      md: "50rem",
      lg: "75rem",
    },
    extend: {
      maxHeight: {
        "120": "30rem",
      },
      fontFamily: {
        body: "'Noto Sans JP', sans-serif",
        jp: "'Yusei Magic', sans-serif",
        en: "'Yusei Magic', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
