const PubSub = require('../helpers/pub_sub.js');

const BeerSelectView = function(element){
  this.element = element;
}


BeerSelectView.prototype.bindEvents = function(){

  PubSub.subscribe('Beers:all-beers', (event) => {
    this.populate(event.detail)
    // console.log(event.detail);
  })
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:beer-selected', selectedIndex)
  })
}

BeerSelectView.prototype.populate = function(beers){
  beers.forEach((beer,index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = beer.name;
    this.element.appendChild(option);
  })
}

module.exports = BeerSelectView;
