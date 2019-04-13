const Beer = require('./model/beer.js')
const FormView = require('./views/form_view.js')
const DisplayBeerView = require('./views/display_beer_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log("moooo");

  // the API URL needed to be split in two because the url looks like this --> https://api.punkapi.com/v2/beers?page=1&per_page=80 where the 'page=(num)' increases to 5
  const beer = new Beer('https://api.punkapi.com/v2/beers?page=', '&per_page=80');
  // beer.bindEvents();
  beer.getData();

  // const formView = new FormView();
  // formView.bindEvents();

  const whereBeerViewGoes = document.querySelector('#display-result-beer')
  const displayBeerView = new DisplayBeerView(whereBeerViewGoes);
  displayBeerView.bindEvents();

});
