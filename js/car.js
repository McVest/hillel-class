export class Car {
  owner;
  
  constructor(brand, model, licensePlate, yearOfManufacture) {
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