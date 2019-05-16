const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(selectElement){
  this.element = selectElement;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munroes:munroes-data-ready', (event) =>{
    //console.log('ev detail', event.detail);
    this.populate(event.detail);
  })
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectViewChange', selectedIndex);
  })
}



SelectView.prototype.createOption = function(name, index){
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  return option;
}

SelectView.prototype.populate = function (munroes) {
  munroes.forEach((munroe, index)=>{
    const munroeOption = this.createOption(munroe.name, index)
    this.element.appendChild(munroeOption);
  })
};




module.exports = SelectView;
