const SelectView = require('./views/select_view.js');
const Munroes = require('./models/munroes.js');
const MunroeView = require('./views/munroe_view.js')





document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaS Loaded');

  const selectElement = document.querySelector('select#munroes');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const munroeContainer = document.querySelector('#hillock');
  const munroeView = new MunroeView(munroeContainer);
  munroeView.bindEvents();

  const munroes = new Munroes('https://munroapi.herokuapp.com/munros')
  munroes.bindEvents();
  munroes.getData();


})
