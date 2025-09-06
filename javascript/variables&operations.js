// ============================
// JavaScript Variables & Operations
// ============================

// VARIABLES
// Variables are used to store data values.
// We can declare variables in three ways: var, let, and const.

// var: Old way (function-scoped, can be redeclared)
var oldVariable = "I am var";
console.log(oldVariable);

// let: Modern way (block-scoped, can be updated but not redeclared in same scope)
let modernVariable = "I am let";
console.log(modernVariable);

// const: Constant value (block-scoped, cannot be updated or redeclared)
const constantValue = 3.1416;
console.log(constantValue);

// ============================
// DATA TYPES
// ============================
// JavaScript has different types: String, Number, Boolean, Object, Array, Undefined, Null

let name = "Suvo Dip";    // String
let age = 21;             // Number
let isStudent = true;     // Boolean
let marks = [85, 90, 78]; // Array
let person = {            // Object
    firstName: "Suvo",
    lastName: "Dip"
};
let nothing = null;       // Null
let notAssigned;          // Undefined

console.log(name, age, isStudent, marks, person, nothing, notAssigned);

// ============================
// BASIC OPERATIONS
// ============================

// 1. Arithmetic Operations
let x = 10;
let y = 3;

console.log("Addition:", x + y);       // 13
console.log("Subtraction:", x - y);    // 7
console.log("Multiplication:", x * y); // 30
console.log("Division:", x / y);       // 3.333...
console.log("Modulus:", x % y);        // 1 (remainder)
console.log("Exponent:", x ** y);      // 1000 (10^3)

// 2. Assignment Operators
let num = 5;
num += 3; // num = num + 3
console.log("After += :", num);

num *= 2; // num = num * 2
console.log("After *= :", num);

// 3. Comparison Operators
console.log("Equal (==):", x == "10");       // true (checks value only)
console.log("Strict Equal (===):", x === 10); // true (checks value & type)
console.log("Not Equal (!=):", x != y);      // true
console.log("Greater Than (>):", x > y);     // true
console.log("Less Than (<):", x < y);        // false

// 4. Logical Operators
let a = true;
let b = false;

console.log("AND (&&):", a && b); // false
console.log("OR (||):", a || b);  // true
console.log("NOT (!):", !a);      // false

// ============================
// CONCATENATION (Joining Strings)
// ============================
let firstName = "Suvo";
let lastName = "Dip";
let fullName = firstName + " " + lastName; // Using + operator
console.log("Full Name:", fullName);

// Using Template Literals (better way)
let greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(greeting);

// ============================
// SUMMARY
// ============================
// 1. Use let and const instead of var.
// 2. Remember JavaScript is dynamically typed.
// 3. Operators are used to perform actions on variables.
// 4. Use template literals for cleaner strings.
