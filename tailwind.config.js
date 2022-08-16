module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "rgba(0, 255, 208, 0.6)",
        navBefore: "#cee5ff",
        navBeforeOn: "#001d32",
        navBeforeHover: "#96ccff",
        navAfter: "#004a76",
        navAfterOn: "#cee5ff",
        navAfterHover: "#00639a",
        container: "#fbfcff",
        containerOn: "#001e2c",
        fadeIn: "#dce3e9",
        buttonA: "#c0e8ff",
        buttonAOn: "#001e2b",
        buttonB: "#004d66",
        buttonBOn: "#c0e8ff",
        textBgOn: "#001e2c",
        impressum: "#dce3e9",
        impressumOn: "#40484c",
        hoverEffect: "#71787d",
      },
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
