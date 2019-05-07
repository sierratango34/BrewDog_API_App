const FormView = require("./views/form_view.js");
const DisplayBeerView = require("./views/display_beer_view.js");
const RequestHelper = require("./helpers/request_helper.js");
const PubSub = require("./helpers/pub_sub.js");

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#button");
  const formView = new FormView(button);
  formView.bindEvents();

  const whereBeerViewGoes = document.querySelector("#display-result-beer");
  const displayBeerView = new DisplayBeerView(whereBeerViewGoes);
  displayBeerView.bindEvents();

  new RequestHelper("/api/random-beer").get().then(res => {
    PubSub.publish("Beer:random-beer-selected", res);
  });
});
