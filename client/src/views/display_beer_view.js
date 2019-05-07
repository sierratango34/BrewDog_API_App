const PubSub = require("../helpers/pub_sub.js");

const DisplayBeerView = function(container) {
  this.container = container;
};

DisplayBeerView.prototype.bindEvents = function() {
  PubSub.subscribe("Beer:random-beer-selected", event => {
    const randomBeer = event.detail;
    this.render(randomBeer);
  });
};

DisplayBeerView.prototype.render = function(beer) {
  this.container.innerHTML = "";

  const img = document.createElement("img");
  if (beer.image_url != null) {
    img.classList.add("beer-pics");
    img.src = beer.image_url;
  }
  this.container.appendChild(img);

  const heading = this.createTextElement("h2", beer.name);

  const tagline = this.createTextElement("h4", beer.tagline);

  const abv = this.createTextElement("h4", `ABV: ${beer.abv}%`);

  const firstBrewed = this.createTextElement(
    "h4",
    `First Brewed: ${beer.first_brewed}`
  );

  const description = this.createTextElement("p", beer.description);

  const foodPairingHead = document.createElement("h4");
  foodPairingHead.classList.add("food-pairing");
  foodPairingHead.textContent = "Food Pairings";
  this.container.appendChild(foodPairingHead);

  this.loopThruFoodPairings(beer.food_pairing);
};

DisplayBeerView.prototype.loopThruFoodPairings = function(foodPairingArray) {
  foodPairingArray.forEach(foodItem => {
    const foodPairingListItem = document.createElement("li");
    foodPairingListItem.textContent = foodItem;
    foodPairingHead = document.querySelector(".food-pairing");
    foodPairingHead.appendChild(foodPairingListItem);
  });
};

DisplayBeerView.prototype.createTextElement = function(element, text) {
  const createdElement = document.createElement(element);
  createdElement.textContent = text;
  this.container.appendChild(createdElement);
};
module.exports = DisplayBeerView;
