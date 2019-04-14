const PubSub = require('../helpers/pub_sub.js');

const FormView = function(submit){
  this.submit = submit;
};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#submit-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const clickEvent = event.target;
    console.log("this is a click event",clickEvent);
    PubSub.publish('FormView:submit', event);
  } );
};

module.exports = FormView;
