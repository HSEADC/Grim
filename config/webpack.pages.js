const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html", ["index"]),
  createPages(
    "./src/pages/articles/big_articles/philosophy-of-the-saw.html",
    "./pages/articles/big_articles/philosophy-of-the-saw.html",
    ["index", "b_article"],
  ),
  createPages(
    "./src/pages/articles/big_articles/running-man.html",
    "./pages/articles/big_articles/running-man.html",
    ["index", "b_article"],
  ),
  createPages(
    "./src/pages/articles/big_articles/joyce-st.html",
    "./pages/articles/big_articles/joyce-st.html",
    ["index", "b_article"],
  ),
  createPages(
    "./src/pages/articles/big_articles/hereditary.html",
    "./pages/articles/big_articles/hereditary.html",
    ["b_article"],
  ),
  createPages("./src/pages/articles.html", "./pages/articles.html", [
    "index",
    "articles",
    "filterArticles",
  ]),
  createPages(
    "./src/pages/articles/short_articles/it.html",
    "./pages/articles/short_articles/it.html",
    ["s_article"],
  ),
  createPages("./src/pages/about.html", "./pages/about.html", ["index"]),
  createPages("./src/pages/cards.html", "./pages/cards.html", [
    "index",
    "filterTags",
  ]),
  createPages("./src/pages/tests.html", "./pages/tests.html", ["index"]),
  createPages(
    "./src/pages/tests/suitable-horror-subgenre.html",
    "./pages/tests/suitable-horror-subgenre.html",
    ["index", "test1"],
  ),
  createPages(
    "./src/pages/tests/knowledge-popular-horrors.html",
    "./pages/tests/knowledge-popular-horrors.html",
    ["index", "test2"],
  ),
  createPages(
    "./src/pages/tests/final-destination.html",
    "./pages/tests/final-destination.html",
    ["index", "test3"],
  ),
  createPages(
    "./src/pages/tests/easy-to-dive-in.html",
    "./pages/tests/easy-to-dive-in.html",
    ["index", "test4"],
  ),
  createPages("./src/pages/styleguide.html", "./pages/styleguide.html", [
    "styleguide",
  ]),
  createPages("./src/pages/randomizer.html", "./pages/randomizer.html", [
    "index",
    "randomizer",
  ]),
];

module.exports = htmlPages;
