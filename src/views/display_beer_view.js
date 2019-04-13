const PubSub = require('../helpers/pub_sub.js');

const DisplayBeerView = function (container) {
  this.container = container;
};

DisplayBeerView.prototype.bindEvents = function () {
  PubSub.subscribe('Beer:random-beer-selected', (event) => {
    const randomBeer = event.detail;
    this.render(randomBeer);
  });
};

DisplayBeerView.prototype.render = function (beer) {
  const img = document.createElement('img');
  if (beer.image_url != null) {
    img.src = beer.image_url;
  };
  this.container.appendChild(img);

  const heading = document.createElement('h3');
  heading.textContent = beer.name;
  this.container.appendChild(heading);

  const tagline = document.createElement('h4');
  tagline.textContent = beer.tagline;
  this.container.appendChild(tagline);

  const abv = document.createElement('h4');
  tagline.textContent = `ABV: ${beer.abv}%`;
  this.container.appendChild(tagline);

  const firstBrewed = document.createElement('h4')
  firstBrewed.textContent = `First Brewed: ${beer.first_brewed}`;
  this.container.appendChild(firstBrewed);

  const description = document.createElement('p');
  description.textContent = beer.description;
  this.container.appendChild(description);

  const foodPairingHead = document.createElement('h4');
  foodPairingHead.classList.add('food-pairing');
  foodPairingHead.textContent = "Food Pairings";
  this.container.appendChild(foodPairingHead);

  this.loopThruFoodPairings(beer.food_pairing);
  // beer.food_pairing.forEach( (foodItem) => {
  //   foodPairingList.textContent = foodItem;
  // });
  // foodPairingHead.appendChild(foodPairingList);
};

DisplayBeerView.prototype.loopThruFoodPairings = function (foodPairingArray) {
  foodPairingArray.forEach( (foodItem) => {
    const foodPairingListItem = document.createElement('li');
    foodPairingListItem.textContent = foodItem;
    foodPairingHead = document.querySelector('.food-pairing');
    foodPairingHead.appendChild(foodPairingListItem);
    console.log("food pairing:",foodItem);
  });
};

module.exports = DisplayBeerView;
