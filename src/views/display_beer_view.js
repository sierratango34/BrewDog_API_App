const PubSub = require('../helpers/pub_sub.js');

const DisplayBeerView = function (container) {
  this.container = container;
};

DisplayBeerView.prototype.bindEvents = function () {
  PubSub.subscribe('Beer:random-beer-selected', (event) => {
    this.render(event);
  });
};

DisplayBeerView.prototype.render = function (beer) {
  const heading = document.createElement('h3');
  heading.textContent = beer.name;
  this.container.appendChild(heading);
};

module.exports = DisplayBeerView;
