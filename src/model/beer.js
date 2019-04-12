const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Beer = function (url1, url2) {
  this.url1 = url1;
  this.url2 = url2;
  this.allBeers = [];
} ;

// Beer.prototype.bindEvents = function () {
//   PubSub.subcribe( 'click', callbackfunc)
//   this.getData()
//   this.sendData
// };

Beer.prototype.getData = function () {
  const allUrls = this.getUrlList(this.url1, this.url2);
  Promise.all(allUrls.map( function(url) {
    const request = new RequestHelper(url);
    return request.get()
  }))
  .then( (data) => {
    this.allBeers = data.flat(1);
    console.log("flattenedarrays", this.allBeers);
    this.getRandomBeer();
  });
};

Beer.prototype.sendData = function () {
  const randomBeer = this.allBeers.getRandomBeer();
  PubSub.publish('Beer:random-beer-selected', randomBeer)
};

Beer.prototype.getRandomInt = function () {
  min = 0;
  max = 326;
  return Math.ceil(Math.floor(Math.random() * (max - min)) + min);
};

Beer.prototype.getRandomBeer = function () {
  const theRandomInt = this.getRandomInt();
  this.allBeers[theRandomInt];
  console.log(theRandomInt);
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
