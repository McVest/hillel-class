export class House {
  apartments = []
  constructor(maxApartments) {
    this.maxApartments = maxApartments;
  }
  
  addApartment(apartment) {
    this.apartments.length < this.maxApartments ?
      this.apartments.push(apartment)
    :
      console.log("The house is full, cannot add more apartments.");
  }
}