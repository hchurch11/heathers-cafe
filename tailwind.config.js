module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: { light: "#b49075", medium: "#5A473A", dark: "#231D14" },
      },

      fontFamily: {
        body: ["Quicksand"],
      },

      backgroundImage: {
        coffeeLove:
          "url('./public/img/jessica-lewis-Am2kjOEKADs-unsplash.jpg')",
        coffeeBeans:
          "url('./public/img/nordwood-themes-ivP3TYdLvw0-unsplash.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
