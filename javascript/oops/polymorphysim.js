// Example of Polymorphism in JavaScript

// Parent Class
class Bird {
    // This method will be inherited by child classes
    fly() {
        return `Birds can fly`;
    }
}

// Child Class extending Bird
class Penguin extends Bird {
    // Method overriding - child class changes the parent's method behavior
    fly() {
        return `Penguins can't fly`;
    }
}

// Creating an object of Bird
let birdObj = new Bird();  
// Creating an object of Penguin
let penguinObj = new Penguin();  

// Even though both have the same method name "fly()", 
// the output depends on which class the object belongs to.
console.log(birdObj.fly());      // Output: Birds can fly
console.log(penguinObj.fly());   // Output: Penguins can't fly

/*
  📌 Key Points:
  1. Polymorphism = Same method name, different behavior.
  2. Parent method can be overridden in child class.
  3. Helps make code more flexible and reusable.
*/
