const RequestHelper = require ('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munroes = function (url) {
  this.url = url;
  this.munroes = [];
}


Munroes.prototype.bindEvents = function () {
  PubSub.subscribe('SelectViewChange', (event) => {

    selectedIndex = event.detail;
      console.log('view change',event.detail );
    const selectedMunroe = this.munroes[selectedIndex];
    PubSub.publish('Munroes:selected-munroe-ready', selectedMunroe);

  })
}


Munroes.prototype.getData = function () {
  const request = new RequestHelper(this.url);
  request.get()
  .then((data)=>{
    this.munroes = data;
    PubSub.publish('Munroes:munroes-data-ready', this.munroes)
  })

}



module.exports = Munroes;
