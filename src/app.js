const Beers = require('./models/beers.js')
const BeerListView = require('./views/beer_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript Loaded");

  const container = document.querySelector('#beer-list');
  const beerList = new BeerListView(container)
  beerList.bindEvents();

  const beers = new Beers();
  beers.getData();

  const canvas = document.querySelector('#main-canvas')
  console.log('canvas', canvas);

  const context = canvas.getContext('2d')
  console.log('context', context);

  const drawCircle = function(x, y){
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI*2, true);
    context.stroke();
  }


  canvas.addEventListener('mousemove', (event) => {
    console.log('clicked', event);
    drawCircle(event.x, event.y);
  });
})
