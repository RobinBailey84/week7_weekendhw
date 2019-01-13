const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Beers = function(){
  this.beers = [];
}

Beers.prototype.getData = function(){
  const request = new Request('https://api.punkapi.com/v2/beers');
  request.get().then((data) => {
    this.beers = data;
    // console.log(this.beers);
    PubSub.publish('Beers:all-beers', this.beers);
  })
}

module.exports = Beers;
