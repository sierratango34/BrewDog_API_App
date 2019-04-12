const Beer = require('./model/beer.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log("moooo");

  const beer = new Beer('https://api.punkapi.com/v2/beers?page=', '&per_page=80');
  beer.getData();

});
