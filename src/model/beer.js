const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Beer = function (url1, url2) {
  this.url1 = url1;
  this.url2 = url2;
  this.allBeers = [];
} ;

Beer.prototype.bindEvents = function () {
  const allBeers = this.getData()
  console.log("this is all the beer:", allBeers);
  PubSub.subscribe('FormView:submit', () => {
    const randomBeer = this.getRandomBeer(this.allBeers);
    // console.log(this.allBeers);
    // this.sendData(randomBeer);
    // console.log("this is a random beer being sent", randomBeer);
  });
};

Beer.prototype.getData = function () {
  const allUrls = this.getUrlList(this.url1, this.url2);
  Promise.all(allUrls.map( function(url) {
    const request = new RequestHelper(url);
    return request.get()
  }))
  .then( (data) => {
    this.allBeers = data.flat(1);
    const allBeers = this.allBeers;
    console.log("Flattened Array of All Beers:", allBeers);
    const aRandomBeer = this.getRandomBeer(allBeers);
  });
  return this.allBeers;
};

// Beer.prototype.sendData = function (data) {
//   const randomBeer = this.getRandomBeer(data);
//   console.log("Random Beer Being Broadcast",randomBeer);
//   PubSub.publish('Beer:random-beer-selected', randomBeer)
// };

Beer.prototype.getRandomBeer = function (allBeers) {
  const theRandomInt = this.getRandomInt();
  const randomBeerObject = allBeers[theRandomInt];
  console.log("A Random Beer:", randomBeerObject);
  PubSub.publish('Beer:random-beer-selected', randomBeerObject)
};

Beer.prototype.getRandomInt = function () {
  min = 0;
  max = 326;
  return Math.ceil(Math.floor(Math.random() * (max - min)) + min);
};

Beer.prototype.getUrlList = function (url1, url2) {
  const urlList = [];
  for (let pageNumber = 1; pageNumber < 6; pageNumber++) {
    const newUrl = url1 + pageNumber + url2
    urlList.push(newUrl);
  };
  return urlList;
};

module.exports = Beer;
