"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            return "Sorry, this vehicle is already rented.";
        }
        else {
            this.rented = true;
            return "Vehicle rented successfully.";
        }
    }
    returnVehicle() {
        if (this.rented) {
            this.rented = false;
            return "Vehicle returned successfully.";
        }
        else {
            return "This vehicle is not rented.";
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, numSeats, hasAC) {
        super(make, model, year, rented);
        this.numSeats = numSeats;
        this.hasAC = hasAC;
    }
    rentalRate() {
        return 50;
    }
    hasAirConditioning() {
        return this.hasAC;
    }
    getNumSeats() {
        return this.numSeats;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, maxPayload) {
        super(make, model, year, rented);
        this.maxPayload = maxPayload;
    }
    rentalRate() {
        return 100;
    }
    getMaxPayload() {
        return this.maxPayload;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, hasSidecar) {
        super(make, model, year, rented);
        this.hasSidecar = hasSidecar;
    }
    rentalRate() {
        return 30;
    }
    hasSideCar() {
        return this.hasSidecar;
    }
}
const button = document.getElementById('vehicle');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function handleClick(event) {
    console.log('button clicked');
    console.log(event);
    console.log(event.target);
});
