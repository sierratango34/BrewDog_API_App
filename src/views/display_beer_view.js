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


  const heading = this.createTextElement('h2', beer.name);
  // const heading = document.createElement('h3');
  // heading.textContent = beer.name;
  // this.container.appendChild(heading);

  const tagline = this.createTextElement('h4', beer.tagline);
  // const tagline = document.createElement('h4');
  // tagline.textContent = beer.tagline;
  // this.container.appendChild(tagline);

  const abv = this.createTextElement('h4', `ABV: ${beer.abv}%`)
  // const abv = document.createElement('h4');
  // abv.textContent = `ABV: ${beer.abv}%`;
  // this.container.appendChild(abv);

  const firstBrewed = this.createTextElement('h4', `First Brewed: ${beer.first_brewed}`);
  // const firstBrewed = document.createElement('h4')
  // firstBrewed.textContent = `First Brewed: ${beer.first_brewed}`;
  // this.container.appendChild(firstBrewed);

  const description = this.createTextElement('p', beer.description);
  // const description = document.createElement('p');
  // description.textContent = beer.description;
  // this.container.appendChild(description);

  const foodPairingHead = document.createElement('h4');
  foodPairingHead.classList.add('food-pairing');
  foodPairingHead.textContent = "Food Pairings";
  this.container.appendChild(foodPairingHead);

  this.loopThruFoodPairings(beer.food_pairing);
};

DisplayBeerView.prototype.loopThruFoodPairings = function (foodPairingArray) {
  foodPairingArray.forEach( (foodItem) => {
    const foodPairingListItem = document.createElement('li');
    foodPairingListItem.textContent = foodItem;
    foodPairingHead = document.querySelector('.food-pairing');
    foodPairingHead.appendChild(foodPairingListItem);
  });
};

DisplayBeerView.prototype.createTextElement = function (element, text) {
  const createdElement = document.createElement(element);
  createdElement.textContent = text;
  this.container.appendChild(createdElement);
};
module.exports = DisplayBeerView;
