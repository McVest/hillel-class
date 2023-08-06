import {Human} from "./human.js";
import {House} from "./house.js";
import {Apartment} from "./apartment.js";

const human1 = new Human("John Doe", "male");
const human2 = new Human("Jane Smith", "female");
const human3 = new Human("Alex Johnson", "male");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(human1);
apartment2.addResident(human2);

apartment3.addResident(human3);

const house = new House(2);
house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

console.log(house);