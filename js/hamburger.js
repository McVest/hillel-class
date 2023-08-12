export class Hamburger {
  toppings = [];
  
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }
  
  addTopping(topping) {
    this.toppings.push(topping);
  }
  
  calculate() {
    let calories = this.size.calories + this.stuffing.calories;
    for (const value of this.toppings)
      calories += value.calories;
    return calories;
  }
  
  calculatePrice() {
    let price = this.size.prise + this.stuffing.prise;
    for (const value of this.toppings)
      price += value.price;
    return price;
  }
}