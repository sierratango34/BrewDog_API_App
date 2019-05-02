const Beer = require("./model/beer.js");
const FormView = require("./views/form_view.js");
const DisplayBeerView = require("./views/display_beer_view.js");

document.addEventListener("DOMContentLoaded", () => {
  const beer = new Beer(
    "https://api.punkapi.com/v2/beers?page=",
    "&per_page=80"
  );
  beer.bindEvents();

  const button = document.querySelector("#button");
  const formView = new FormView(button);
  formView.bindEvents();

  const whereBeerViewGoes = document.querySelector("#display-result-beer");
  const displayBeerView = new DisplayBeerView(whereBeerViewGoes);
  displayBeerView.bindEvents();
});
