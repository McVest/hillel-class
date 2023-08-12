import {Hamburger} from "./hamburger.js";

const HAMBURGER = {
  SIZE_SMALL: {prise: 50, calories: 20},
  SIZE_BID: {prise: 100, calories: 40},
  STUFFING_CHEESE: {prise: 10, calories: 20},
  STUFFING_SALAD: {prise: 20, calories: 5},
  STUFFING_POTATO: {prise: 15, calories: 10},
  TOPPING_SPICE: {price: 15, calories: 0},
  TOPPING_MAYO: {price: 20, calories: 5}
}

const hamburger = new Hamburger(HAMBURGER.SIZE_BID, HAMBURGER.STUFFING_CHEESE);
hamburger.addTopping(HAMBURGER.TOPPING_MAYO);
hamburger.addTopping(HAMBURGER.TOPPING_SPICE);
console.log("Calories: ", hamburger.calculate());
console.log("Price: ", hamburger.calculatePrice());
hamburger.addTopping(HAMBURGER.TOPPING_SPICE);
console.log("Price with sauce: ", hamburger.calculatePrice());