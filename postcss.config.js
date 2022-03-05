const cssnano =
  process.env.NODE_ENV === "production"
    ? require("cssnano")
    : () => {
        return;
      };
module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    cssnano({
      preset: "default",
    }),
  ],
};
