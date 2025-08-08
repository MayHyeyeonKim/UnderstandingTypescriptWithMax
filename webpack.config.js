const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file

module.exports = {
  // ...existing code...
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.GOOGLE_API_KEY": JSON.stringify(process.env.GOOGLE_API_KEY),
    }),
  ],
  // ...existing code...
};
