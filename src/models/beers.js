const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')
const BeerSelectView = require('../views/beer_select_view.js');

const Beers = function(){
  this.beers = [];
}

Beers.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:beer-selected', (event) => {
    const selectedBeer = event.detail;
    console.log(event.detail);
    const foundBeer = this.findBeer(selectedBeer)
    PubSub.publish('Beers:selected-beer', foundBeer)
    console.log(foundBeer);
  })


}

Beers.prototype.getData = function(){
  const request = new Request('https://api.punkapi.com/v2/beers');
  request.get().then((data) => {
    this.beers = data;
    // console.log(this.beers);
    PubSub.publish('Beers:all-beers', this.beers);
  })
}

Beers.prototype.findBeer = function(index){
  return this.beers[index];
//   const foundBeer = this.beers.filter((beer) => {
//     return beer.detail === searchBeer;
//   })
//   return foundBeer;
// console.log(foundBeer);

}

module.exports = Beers;
