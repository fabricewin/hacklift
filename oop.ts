class Car {
    color: string = "Green";
    brand: string = "Toyota";
    model: string = "Highlander";
    numberOfTyre: number = 4;

    move() {
        console.log("Moving................")
    }
}
// Car.move
// const car = new Car();

// console.log(car.brand);
// console.log(car.model);
// car.move();

class CarWitConstructor {
    color: string;
    brand: string;
    model: string;
    numberOfTyre: number;

    constructor(color: string, brand: string, model: string, numberOfTyre = 4) {
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.numberOfTyre = numberOfTyre;
        console.log("Creating the Car...............")
        console.log(this)
        this.move("Warehouse")
    }

    move(destination: string) {
        console.log(`Moving to ${destination}!!!`);
        console.log(`${this.brand} ${this.model} is moving to ${destination}!!!`);
    }
}

const car2 = new CarWitConstructor("Red", "Honda", "Pilot");

car2.move("Togo");
console.log(car2.brand);
console.log(car2.model);

const lexus375 = new CarWitConstructor("White", "Lexus", "RX375");

console.log(lexus375.brand);
console.log(lexus375.model);
console.log(lexus375.color);

lexus375.move("Calavi")

console.log(".........")
console.log(".........")
console.log(".........")
const kia = new CarWitConstructor("Black", "Kia", "Picanto");