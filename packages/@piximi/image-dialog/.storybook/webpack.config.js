const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        include: path.resolve(__dirname, "../src"),
        loader: "awesome-typescript-loader",
        test: /\.tsx?$/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
