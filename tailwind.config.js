module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { "100_02": "#d9d9d9", "100_04": "#d2dfec", "100_01": "#cecece" },
        black: { 900: "#000000" },
        gray: { 100: "#f2f6fa", 900: "#181a30", "600_cc": "#7a7b86cc" },
        white: { A700: "#ffffff" },
        deep_purple: { 500: "#71549d", "500_7f": "#71549d7f" },
      },
      boxShadow: { xs: "0px 2px 4px 0px #0000003f" },
      fontFamily: { outfit: "Outfit", palanquin: "Palanquin" },
      backgroundImage: { gradient: "linear-gradient(90deg, #9e5eea,#7b6ae1)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
