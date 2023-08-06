class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  getHuman() {
    console.log(`Name:${this.name}, Age: ${this.age}`);
  }
}

class Car {
  owner;
  
  constructor(brand, model, licensePlate, yearOfManufacture, owner) {
    this.brand = brand;
    this.model = model;
    this.yearOfManufacture = yearOfManufacture;
    this.licensePlate = licensePlate;
  }
  
  setOwner(owner) {
    owner.age >= 18 ? this.owner = owner : console.log('The owner is unknown. (since the age of eighteen)');
  }
  
  getInfo() {
    console.log(`Car: ${this.brand} ${this.model}, Year: ${this.yearOfManufacture}, License Plate: ${this.licensePlate}`);
    console.log("Owner:")
    this.owner ?
      this.owner.getHuman() :
      console.log("The owner is unknown.");
  }
}

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