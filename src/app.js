const Beer = require('./model/beer.js')
const FormView = require('./views/form_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log("moooo");

  const formView = new FormView();
  formView.bindEvents();
  // the API URL needed to be split in two because the url looks like this --> https://api.punkapi.com/v2/beers?page=1&per_page=80 where the page=(num) increases to 5
  const beer = new Beer('https://api.punkapi.com/v2/beers?page=', '&per_page=80');
  beer.getData();


});
