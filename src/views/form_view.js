const PubSub = require('../helpers/pub_sub.js');

const FormView = function(){

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#submit-form');
  form.addEventListener('submit', (event) => {
    // event.preventDefault();
    PubSub.publish('FormView:submit', event);
  } );
};

module.exports = FormView;
