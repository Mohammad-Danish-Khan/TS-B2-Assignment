abstract class Vehicle {
    make: string;
    model: string;
    year: string;
    rented: boolean;
  
    constructor(make: string, model: string, year: string, rented: boolean) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): string {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): string {
      if (this.rented) {
        return "Sorry, this vehicle is already rented.";
      } else {
        this.rented = true;
        return "Vehicle rented successfully.";
      }
    }
  
    returnVehicle(): string {
      if (this.rented) {
        this.rented = false;
        return "Vehicle returned successfully.";
      } else {
        return "This vehicle is not rented.";
      }
    }
  }
  
  class Car extends Vehicle {
    numSeats: string;
    hasAC: boolean;
  
    constructor(make: string, model: string, year: string, rented: boolean, numSeats: string, hasAC: boolean) {
      super(make, model, year, rented);
      this.numSeats = numSeats;
      this.hasAC = hasAC;
    }
  
    rentalRate(): number {
      return 50;
    }
  
    hasAirConditioning(): boolean {
      return this.hasAC;
    }
  
    getNumSeats(): string {
      return this.numSeats;
    }
  }
  
  class Truck extends Vehicle {
    maxPayload: string;
  
    constructor(make: string, model: string, year: string, rented: boolean, maxPayload: string) {
      super(make, model, year, rented);
      this.maxPayload = maxPayload;
    }
  
    rentalRate(): number {
      return 100;
    }
  
    getMaxPayload(): string {
      return this.maxPayload;
    }
  }
  
  class Motorcycle extends Vehicle {
    hasSidecar: boolean;
  
    constructor(make: string, model: string, year: string, rented: boolean, hasSidecar: boolean) {
      super(make, model, year, rented);
      this.hasSidecar = hasSidecar;
    }
  
    rentalRate(): number {
      return 30;
    }
  
    hasSideCar(): boolean {
      return this.hasSidecar;
    }
  }

  const button = document.getElementById('vehicle');

  button?.addEventListener('click', function handleClick(event) {
    let make = document.getElementById('make') as HTMLInputElement;
    let model = document.getElementById('model') as HTMLInputElement;
    let year = document.getElementById('year') as HTMLInputElement;
    let numSeats = document.getElementById('seats') as HTMLInputElement;
    let isRented = document.getElementById('rented') as HTMLInputElement;
    let hasAC = document.getElementById('hasAc') as HTMLInputElement;
    const makeCar = make?.value;
    const modelCar = model?.value;
    const yearOfCar : string = year?.value;
    const rentedCar : boolean = isRented?.value == "YES" ? true : false;
    const seatInCar : string = numSeats?.value;
    const carHasCar : boolean = hasAC?.value == "YES" ? true : false;

    let car = new Car(makeCar, modelCar, yearOfCar, rentedCar, seatInCar, carHasCar);

    console.log(car.returnVehicle())

  });