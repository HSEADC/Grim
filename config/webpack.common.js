const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const htmlPages = require("./webpack.pages.js");
const SitemapPlugin = require("sitemap-webpack-plugin").default;

const webpack = require("webpack");
const path = require("path");

const paths = [
  "Grim/index.html",
  "Grim/pages/randomizer.html",
  "Grim/pages/styleguide.html",
  "Grim/pages/errors/404.html",
  "Grim/pages/tests/easy-to-dive-in.html",
  "Grim/pages/tests/final-destination.html",
  "Grim/pages/tests/knowledge-popular-horrors.html",
  "Grim/pages/tests/suitable-horror-subgenre.html",
  "Grim/pages/cards.html",
  "Grim/pages/about.html",
  "Grim/pages/articles/short_articles/max-st.html",
  "Grim/pages/articles/short_articles/getout.html",
  "Grim/pages/articles/short_articles/it.html",
  "Grim/pages/articles/big_articles/hereditary.html",
  "Grim/pages/articles/big_articles/joyce-st.html",
  "Grim/pages/articles/big_articles/running-man.html",
  "Grim/pages/articles/big_articles/philosophy-of-the-saw.html",
];

module.exports = {
  entry: {
    index: "./src/javascripts/index.js",
    filterTags: "./src/javascripts/filterTags.js",
    filterArticles: "./src/javascripts/filterArticles.js",
    test1: "./src/javascripts/test1suitable-horror-subgenre.js",
    test2: "./src/javascripts/test2knowledge-popular-horrors.js",
    test3: "./src/javascripts/test3final-destination.js",
    test4: "./src/javascripts/test4easy-to-dive-in.js",
    randomizer: "./src/javascripts/randomizer.js",
    styleguide: "./src/javascripts/styleguide.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(".", "docs"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    ...htmlPages,
    new SitemapPlugin({ base: "https://hseadc.github.io/Grim/", paths }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [new MiniCssExtractPlugin(), ...htmlPages],
};
