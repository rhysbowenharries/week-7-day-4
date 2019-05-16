const PubSub = require('../helpers/pub_sub.js');


const MunroeView = function (container) {
  this.container = container;
}

MunroeView.prototype.bindEvents = function () {
  PubSub.subscribe('Munroes:selected-munroe-ready', (event) => {
    this.clearScreen();//this deletes the screen before the new details are rendered.
    this.render(event.detail);
  })
}

MunroeView.prototype.clearScreen = function () {
  this.container.innerHTML = " ";
};


MunroeView.prototype.render = function (munroe) {
  const munroeNameTitle = this.createTextElement('h1', 'Munroe name');
  const munroeName = this.createTextElement('h2', munroe.name);
  this.container.appendChild(munroeNameTitle)
  this.container.appendChild(munroeName)

  const munroeDetailsTitle = this.createTextElement('h1', 'Details');
  const munroeHeight = this.createTextElement('h2', `Height: ${munroe.height}`)
  const munroeRegion = this.createTextElement('h2', `Region: ${munroe.region}`)
  this.container.appendChild(munroeDetailsTitle);
  this.container.appendChild(munroeHeight);
  this.container.appendChild(munroeRegion);

}


MunroeView.prototype.createTextElement = function (elementType, munroeName) {
  const element = document.createElement(elementType);
  element.textContent = munroeName;
  return element;
}
module.exports = MunroeView;
