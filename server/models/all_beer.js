const RequestHelper = require("../helpers/request_helper.js");

const AllBeer = function(url1, url2) {
  this.url1 = url1;
  this.url2 = url2;
  this.allBeers = [];
  this.getData();
};

AllBeer.prototype.getData = function() {
  const allUrls = this.getUrlList(this.url1, this.url2);
  Promise.all(
    allUrls.map(function(url) {
      const request = new RequestHelper(url);
      return request.get();
    })
  ).then(responses => {
    this.allBeers = responses
      .map(response => {
        return response.data.map(beer => {
          return beer;
        });
      })
      .flat(1);
  });
};

AllBeer.prototype.getRandomBeer = function() {
  return this.allBeers[this.getRandomInt()];
};

AllBeer.prototype.getRandomInt = function() {
  min = 0;
  max = 326;
  return Math.ceil(Math.floor(Math.random() * (max - min)) + min);
};

AllBeer.prototype.getUrlList = function(url1, url2) {
  const urlList = [];
  for (let pageNumber = 1; pageNumber < 6; pageNumber++) {
    const newUrl = url1 + pageNumber + url2;
    urlList.push(newUrl);
  }
  return urlList;
};

module.exports = AllBeer;
