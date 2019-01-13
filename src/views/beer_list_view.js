const PubSub = require('../helpers/pub_sub.js');
const BeerDetailView = require('./beer_detail_view.js');

const BeerListView = function(container){
  this.container = container;
}

BeerListView.prototype.bindEvents = function(){
  PubSub.subscribe('Beers:all-beers', (event) => {
    this.render(event.detail)
  })
}

BeerListView.prototype.render = function(beers){
  this.container.innerHTML = '';
  beers.forEach((beer) => {
    const beerDetail = new BeerDetailView();
    const beerDiv = beerDetail.createBeerDetail(beer);
    this.container.appendChild(beerDiv);
  })
}

module.exports = BeerListView;
