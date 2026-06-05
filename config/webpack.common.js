const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const htmlPages = require("./webpack.pages.js");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

const webpack = require("webpack");
const path = require("path");

const paths = [
  "index.html",
  "pages/randomizer.html",
  "pages/styleguide.html",
  "pages/errors/404.html",
  "pages/tests/easy-to-dive-in.html",
  "pages/tests/final-destination.html",
  "pages/tests/knowledge-popular-horrors.html",
  "pages/tests/suitable-horror-subgenre.html",
  "pages/tests/test-saw.html",
  "pages/tests/substance.html",
  "pages/cards.html",
  "pages/about.html",
  "pages/articles/short_articles/max-st.html",
  "pages/articles/short_articles/getout.html",
  "pages/articles/short_articles/it.html",
  "pages/articles/short_articles/babadook.html",
  "pages/articles/short_articles/birdbox.html",
  "pages/articles/short_articles/derry.html",
  "pages/articles/short_articles/lighthouse.html",
  "pages/articles/short_articles/midsommar.html",
  "pages/articles/short_articles/sabrina.html",
  "pages/articles/short_articles/silent-hill.html",
  "pages/articles/short_articles/twoderry.html",
  "pages/articles/short_articles/visit.html",
  "pages/articles/short_articles/wednesday-school.html",
  "pages/articles/short_articles/wednesday.html",
  "pages/articles/big_articles/hereditary.html",
  "pages/articles/big_articles/joyce-st.html",
  "pages/articles/big_articles/running-man.html",
  "pages/articles/big_articles/philosophy-of-the-saw.html",
  "pages/articles/big_articles/upside-down.html",
  "pages/articles/big_articles/smile.html",
  "pages/articles/big_articles/ring.html",
  "pages/articles/big_articles/saw-two.html",
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
    test5: "./src/javascripts/test5test-saw.js",
    test6: "./src/javascripts/test6substance.js",
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
    new SitemapPlugin({ base: "https://grim.adc.ac/", paths }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/share/CNAME"),
          to: path.resolve(__dirname, "../docs"),
        },
      ],
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "../src/share/CNAME"),
    //       to: path.resolve(__dirname, "../dev_build"),
    //     },
    //   ],
    // }),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "../src/partials/analytics.html"),
        priority: "replace",
        location: "analytics",
        template_filename: "*",
      },
    ]),
  ],

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
