// ============================
// JavaScript: Primitive & Non-Primitive Data Types
// ============================

// ============================
// PRIMITIVE DATA TYPES
// ============================
// Primitives are immutable (cannot be directly changed) and stored by value.
// There are 7 primitive types: String, Number, Boolean, Undefined, Null, Symbol, BigInt

let myString = "Hello World";                 // String
let myNumber = 42;                            // Number
let myBoolean = true;                         // Boolean
let myUndefined;                              // Undefined
let myNull = null;                            // Null
let mySymbol = Symbol("uniqueId");            // Symbol
let myBigInt = 9007199254740991n;              // BigInt

console.log("Primitive - String:", myString);
console.log("Primitive - Number:", myNumber);
console.log("Primitive - Boolean:", myBoolean);
console.log("Primitive - Undefined:", myUndefined);
console.log("Primitive - Null:", myNull);
console.log("Primitive - Symbol:", mySymbol);
console.log("Primitive - BigInt:", myBigInt);

// ============================
// NON-PRIMITIVE DATA TYPES
// ============================
// Non-primitives are mutable and stored by reference.
// Types: Object, Array, Function (all are technically objects in JS)

let myArray = [1, 2, 3, 4];                    // Array
let myObject = { name: "Suvo", age: 21 };      // Object
let myFunction = function() {                  // Function
    return "Hello from function!";
};

console.log("Non-Primitive - Array:", myArray);
console.log("Non-Primitive - Object:", myObject);
console.log("Non-Primitive - Function:", myFunction());

// ============================
// DIFFERENCE EXAMPLE
// ============================

// Primitive Example (copied by value)
let p1 = "Hello";
let p2 = p1; // Copy value
p2 = "Hi";
console.log("Primitive copy example:", p1, p2); // p1 stays "Hello"

// Non-Primitive Example (copied by reference)
let n1 = { lang: "JavaScript" };
let n2 = n1; // Reference copy
n2.lang = "Python";
console.log("Non-Primitive copy example:", n1, n2); // both change to "Python"
