const PubSub = require('../helpers/pub_sub.js');

const FormView = function(button){
  this.button = button;
};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#submit-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const clickEvent = event;
    console.log("this is a click event",clickEvent);
    PubSub.publish('FormView:submit', clickEvent);
  } );
};

module.exports = FormView;
