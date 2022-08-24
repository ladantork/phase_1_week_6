const Candy = require('./classCandyChallenge');

class Basket {
  constructor(shoppingList){
    this.shoppingList = [];

  }

  addItem(i){
    this.shoppingList.push(i)

  }

  getTotalPrice(){
    let total = 0;

     this.shoppingList.map((n) => {
       return total += n.getPrice();

     });
     return total;
  }

}
const candy = new Candy('Mars', 4.99);
const basket = new Basket();

basket.addItem(candy);
basket.addItem(new Candy("chocolate", 5.99));
basket.addItem(new Candy("marshmallows", 1.99));

console.log(candy.getName());
console.log(candy.getPrice());

console.log(basket.getTotalPrice());


module.exports = Basket;