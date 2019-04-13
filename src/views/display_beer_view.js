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
};

module.exports = DisplayBeerView;
