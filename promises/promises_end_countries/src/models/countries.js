const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function (url) {
  this.url = url;
  this.countries = [];
};

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt) => {
    selectedIndex = evt.detail;
    const selectedCountry = this.countries[selectedIndex];
    PubSub.publish('Countries:selected-country-ready', selectedCountry);
  });
};

Countries.prototype.getData = function () {
  const request = new RequestHelper(this.url);

  const request1 = request.get()
    .then((data) => {
      this.countries = data;
      PubSub.publish('Countries:countries-data-ready', this.countries);
      return data
    })

  const request2 = request.get()
    .then((data) => {
      this.countries = data;
      PubSub.publish('Countries:countries-data-ready', this.countries);
      return data
    })

  Promise.all([request1, request2])
    .then(result => console.log(result))
    .catch(err => console.log(err))


  // request.get((data) => {

  // });
};

module.exports = Countries;
