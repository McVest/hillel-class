import { Human } from './human.js';
import { Car } from './car.js';

const human1 = new Human("John Doe", 25);
human1.getHuman();
const car1 = new Car("Toyota", "Camry", 2022, "AB1234CD");
car1.setOwner(human1);
car1.getInfo();

console.log('------------------------------------------')
const human2 = new Human("Alex Rocks", 16);
human2.getHuman();
const car2 = new Car("Honda", "Civic", 2019, "EF5678GH");
car2.setOwner(human2);
car2.getInfo();