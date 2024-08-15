/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "FA6650",
    },
    fontFamily: {
      oppoSansHeavy: ["OPPOSansHeavy"],
      sfProBold: ["SFProDisplayBold"],
      sfProHeavy: ["SFProDisplayHeavy"],
      sfProMedium: ["SFProDisplayMedium"],
      sfProRegular: ["SFProDisplayRegular"],
      sfProSemibold: ["SFProDisplaySemibold"],
      sfProTextRegular: ["SFProTextRegular"],
    },
  },
  plugins: [],
};
