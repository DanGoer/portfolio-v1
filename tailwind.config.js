module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg-mountain.jpg')",
        bg1: "url('/bg-mountain.jpg')",
        bg2: "url('/portrait.jpg')",
      },
    },
  },
  fontFamily: {
    rob: ["Roboto", "sans-serif"],
  },
  plugins: [],
};
