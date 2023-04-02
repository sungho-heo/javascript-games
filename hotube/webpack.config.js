const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
  mode: "development",
  entry: {
    main: "./src/client/js/main.js",
    videoPlayer: "./src/client/js/videoPlayer.js",
  },
  watch: true,
  plugins: [new MiniCssExtractPlugin({
    filename: "css/styles.css",
  }),
  ],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
}
