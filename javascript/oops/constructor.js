// ============================
// Constructor Function Example
// ============================

// Constructor function (naming convention: first letter capitalized)
function Car(make, model) {
    this.make = make;   // 'this' refers to the new object being created
    this.model = model;
}

// Creating an object using 'new' keyword
let myCar = new Car("Toyota", "Camry");

console.log(myCar); // Car { make: 'Toyota', model: 'Camry' }

// ============================
// Adding methods to prototype
// ============================
Car.prototype.drive = function() {
    console.log(`${this.make} ${this.model} is driving`);
};

myCar.drive(); // Toyota Camry is driving




//another example using prototype


function car(model,price){
    this.model=model
    this.price=price

}
car.prototype.country=function(){
    return `${this.model} mades in america`

}
let mycar =new car('toyota' ,8900000);
console.log(mycar.country());