const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function () { 
  return fetch(this.url) // .fetch will get the url and then handle the condition
    .then(response => response.json())// .then is for when the condition is resolved

    .catch(() =>{})// .catch is for when the condition is rejected
};

module.exports = RequestHelper;
