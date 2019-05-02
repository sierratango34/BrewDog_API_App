const PubSub = require("../helpers/pub_sub.js");
const RequestHelper = require("../helpers/request_helper.js");

const FormView = function(button) {
  this.button = button;
};

FormView.prototype.bindEvents = function() {
  const form = document.querySelector("#submit-form");
  form.addEventListener("submit", evt => {
    evt.preventDefault();
    new RequestHelper("/api/random-beer").get().then(res => {
      PubSub.publish("Beer:random-beer-selected", res);
    });
  });
};

module.exports = FormView;
