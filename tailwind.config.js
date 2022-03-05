const customColors = {
  primary: "#1B1145",
  secondary: "#412279",
  "third-darker": "#100B1F",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.html"],
  theme: {
    extend: {
      colors: {
        font: "#f1f0f0",
        ...customColors,
      },
      backgroundColor: {
        ...customColors,
      },
      screens: {
        xs: "458px",
      },
    },
  },
  plugins: [],
};
