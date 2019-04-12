const RequestHelper = function (url) {
  this.url = url
};

RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then(response => response.json());
};

// RequestHelper.prototype.get = function (onComplete) {
//   const xhr = XHRHttpRequest();
//   xhr.open('GET', this.url);
//   xhr.addEventListener('load', function() {
//     if (this.status !== 200) {
//       return;
//     }
//     const data = JSON.parse(this.responseText);
//     onComplete(data);
//   });
//   xhr.send();
// };

module.exports = RequestHelper;
