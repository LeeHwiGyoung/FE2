const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
module.exports = {
  mode: "development",

  entry: {
    main: path.resolve("./src/app.js"),
  },

  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve("myLoader.js")],
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: `
      Commit version : ${childProcess.execSync("git rev-parse --short HEAD")}
      Commiter : ${childProcess.execSync("git config user.name")}
      Commit Date : ${new Date().toLocaleString()}
    `,
    }),
  ],
};
