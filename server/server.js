const express = require("express");
const app = express();
const path = require("path");
const AllBeer = require("./models/all_beer.js");

const beer = new AllBeer(
  "https://api.punkapi.com/v2/beers?page=",
  "&per_page=80"
);

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.use("/api/random-beer", (req, res) => {
  const randomBeer = beer.getRandomBeer();
  res.send(beer.getRandomBeer());
});

app.use("", function(req, res) {
  res.send();
});

app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port}`);
});
