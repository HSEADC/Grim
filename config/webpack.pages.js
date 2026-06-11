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
    ["index"],
  ),
  createPages(
    "./src/pages/articles/big_articles/running-man.html",
    "./pages/articles/big_articles/running-man.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/big_articles/joyce-st.html",
    "./pages/articles/big_articles/joyce-st.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/big_articles/hereditary.html",
    "./pages/articles/big_articles/hereditary.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/big_articles/upside-down.html",
    "./pages/articles/big_articles/upside-down.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/big_articles/smile.html",
    "./pages/articles/big_articles/smile.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/big_articles/saw-two.html",
    "./pages/articles/big_articles/saw-two.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/big_articles/ring.html",
    "./pages/articles/big_articles/ring.html",
    ["index"],
  ),
  createPages("./src/pages/articles.html", "./pages/articles.html", [
    "index",
    "articles",
    "filterArticles",
  ]),
  createPages(
    "./src/pages/articles/short_articles/it.html",
    "./pages/articles/short_articles/it.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/getout.html",
    "./pages/articles/short_articles/getout.html",
    ["index"],
  ),

  createPages(
    "./src/pages/articles/short_articles/max-st.html",
    "./pages/articles/short_articles/max-st.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/babadook.html",
    "./pages/articles/short_articles/babadook.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/birdbox.html",
    "./pages/articles/short_articles/birdbox.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/derry.html",
    "./pages/articles/short_articles/derry.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/lighthouse.html",
    "./pages/articles/short_articles/lighthouse.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/midsommar.html",
    "./pages/articles/short_articles/midsommar.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/sabrina.html",
    "./pages/articles/short_articles/sabrina.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/silent-hill.html",
    "./pages/articles/short_articles/silent-hill.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/twoderry.html",
    "./pages/articles/short_articles/twoderry.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/visit.html",
    "./pages/articles/short_articles/visit.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/wednesday-school.html",
    "./pages/articles/short_articles/wednesday-school.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articles/short_articles/wednesday.html",
    "./pages/articles/short_articles/wednesday.html",
    ["index"],
  ),
  createPages("./src/pages/about.html", "./pages/about.html", ["index"]),
  createPages(
    "./src/pages/specialproject.html",
    "./pages/specialproject.html",
    ["index", "player"],
  ),
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
  createPages(
    "./src/pages/tests/test-saw.html",
    "./pages/tests/test-saw.html",
    ["index", "test5"],
  ),
  createPages(
    "./src/pages/tests/substance.html",
    "./pages/tests/substance.html",
    ["index", "test6"],
  ),
  createPages("./src/pages/errors/404.html", "./pages/errors/404.html", [
    "index",
  ]),

  createPages("./src/pages/styleguide.html", "./pages/styleguide.html", [
    "index",
    "styleguide",
  ]),
  createPages("./src/pages/randomizer.html", "./pages/randomizer.html", [
    "index",
    "randomizer",
  ]),
];

module.exports = htmlPages;
