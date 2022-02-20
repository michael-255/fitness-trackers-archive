const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    // webpack-dev-server: auto open browser and hot reloading
    open: true,
    hot: true
  },
  output: {
    // No filename hash for output in development
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Your html template (think of it like the html entry point)
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        // Import into code to work (import "./styles.scss")
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});