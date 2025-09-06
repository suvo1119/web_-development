// ============================
// JavaScript Functions, Arrow Functions, and `this` Context
// ============================

// ----------------------------
// WHAT IS A FUNCTION?
// ----------------------------
// A function is a block of code designed to perform a specific task.
// Functions help in code reusability and organization.

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Suvo"));

// 2. Function Expression
const greetExpression = function(name) {
    return `Hi, ${name}!`;
};
console.log(greetExpression("Dip"));

// ----------------------------
// WHAT IS AN ARROW FUNCTION?
// ----------------------------
// Arrow functions are a shorter syntax for writing functions.
// They do NOT have their own `this` context (important for later).
// Syntax: const functionName = (params) => { ... }

// Example 1: Simple arrow function
const add = (a, b) => a + b;
console.log("Addition:", add(5, 3));

// Example 2: Multi-line arrow function
const multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log("Multiplication:", multiply(4, 6));

// ----------------------------
// `this` Keyword in JavaScript
// ----------------------------
// `this` refers to the object that is executing the current function.

// 1. `this` in an Object Method
const person = {
    name: "Suvo",
    age: 21,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.greet(); // "this" refers to the "person" object

// 2. `this` in a Regular Function (Global Context)
function showThis() {
    console.log(this);
}
showThis(); // In strict mode: undefined, else refers to global object (window in browser)

// 3. `this` in an Arrow Function
const arrowShowThis = () => {
    console.log(this);
};
arrowShowThis(); 
// In arrow functions, `this` is taken from the surrounding lexical scope (not the caller)

// ----------------------------
// DIFFERENCE BETWEEN REGULAR AND ARROW FUNCTIONS (with `this`)
// ----------------------------
const obj = {
    value: 100,
    regularFunc: function() {
        console.log("Regular function this.value:", this.value);
    },
    arrowFunc: () => {
        console.log("Arrow function this.value:", this.value);
    }
};

obj.regularFunc(); // Works: 100
obj.arrowFunc();   // Undefined: arrow functions don't have their own `this`

// ----------------------------
// BEST PRACTICES
// ----------------------------
// - Use regular functions when you need `this` to refer to the calling object
// - Use arrow functions for short callbacks or when you want `this` to be inherited from the outer scope
// - Remember: Arrow functions can't be used as constructors


// example

       /* 3. Write an arrow function named 'calculateTotal that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named 'totalCost`.
*/

let calculatetotal =(price ,quantity)=>{
    let result=(price*quantity);
    return result;

}
let Totalcost=calculatetotal(6,90)
console.log(`total is ${Totalcost}`)








