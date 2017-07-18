const _ = require('lodash');
const products = [
  {id: 1, name: "Michael Jordan RC", rating: 100},
  {id: 2, name: "LeBron James RC", rating: 90},
  {id: 3, name: "Kobe Bryant RC", rating: 95}
];
var idCount = 4;

function add(name,rating){
	products.push({ id: idCount++, name:name, rating: rating});
}
function list() {
  return _.cloneDeep(products);
}
function find(id) {
  // return _.cloneDeep(_.filter(products, id));
  // console.log(id)
  // console.log(products)
  for(var i in products){
    // console.log(typeof id + typeof products[i].id)
    if(products[i].id === Number(id)){
      // console.log(products[i])
      return products[i]
    }
  }
}
function topRating(){
  var rating = 0;
  var id = 1;
  for(var i in products){
    if(products[i].rating > rating){
      rating = products[i].rating;
      id = i;
    }
  }
  return products[id];
}
function remove(id){
  console.log(typeof products.id, products.id)
  console.log(typeof id, id)
  for(var i in products){
    if(products[i].id === Number(id)){
      products.splice(i,1)
      return products;
    }
  }
  
}

module.exports = { add: add, list: list, find: find, topRating: topRating, remove: remove};

// console.log(products);
