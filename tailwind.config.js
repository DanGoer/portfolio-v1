module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg-mountain.jpg')",
      },
    },
  },
  fontFamily: {
    rob: ["Roboto", "sans-serif"],
  },
  plugins: [],
};
