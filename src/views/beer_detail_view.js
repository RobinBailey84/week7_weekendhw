const BeerDetailView = function(){

}

BeerDetailView.prototype.createBeerDetail = function(beer){
  const beerDiv = document.createElement('div')

  const header = document.createElement('h1');
  header.textContent = beer.name;
  beerDiv.appendChild(header);

  const infoList = document.createElement('ul');

  const tagline = document.createElement('li');
  tagline.textContent = `Tagline: ${beer.tagline}`
  infoList.appendChild(tagline);

  const alcContent = document.createElement('li');
  alcContent.textContent = `ABV: ${beer.abv}%`
  infoList.appendChild(alcContent)

  const beerImage = document.createElement('img');
  beerImage.src = beer.image_url;
  beerImage.alt = `${beer.name}'s image'`;
  beerImage.id = 'beer'
  infoList.appendChild(beerImage)

  // beer.foodPairing.forEach((food) => {
  //   const listItem = document.createElement('li')
  //   listItem.textContent = food;
  //   infoList.appendChild(listItem);
  // })

  const foodPairing = document.createElement('li');
  foodPairing.textContent = `Good with: ${beer.food_pairing}`
  infoList.appendChild(foodPairing)

  beerDiv.appendChild(infoList)

  return beerDiv;
}

module.exports = BeerDetailView;
