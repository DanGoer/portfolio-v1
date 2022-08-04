module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { mint: "rgba(0, 255, 208, 0.6)" },
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
