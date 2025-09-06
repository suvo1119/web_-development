// ============================
// JavaScript Loops - Detailed Introduction
// ============================

// ----------------------------
// WHAT IS A LOOP?
// ----------------------------
// A loop is a programming structure that repeats a block of code
// until a certain condition is met. Loops help avoid writing
// repetitive code manually.
//
// Example without a loop:
// console.log(1);
// console.log(2);
// console.log(3); // This is repetitive
//
// Example with a loop:
// for (let i = 1; i <= 3; i++) {
//     console.log(i);
// }

// Why use loops?
// 1. Saves time (no repetition)
// 2. Makes code shorter and cleaner
// 3. Helps process data in bulk (e.g., arrays, objects)
// ----------------------------


// ============================
// 1. for loop
// ============================
// The most common type of loop.
// Syntax:
// for(initialization; condition; update) {
//     // code to run each time
// }
//
// Steps:
// 1. Initialization - runs once at the start (e.g., let i = 0)
// 2. Condition - checked before every iteration (loop runs if true)
// 3. Update - changes the loop variable each time (e.g., i++)
//
// Example: Print numbers from 1 to 5

console.log("For Loop Example:");
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}


// ============================
// 2. while loop
// ============================
// Syntax:
// while(condition) {
//     // code to run
// }
//
// Steps:
// 1. Check the condition
// 2. If true, run the code block
// 3. Repeat until condition becomes false
//
// Best used when we don't know in advance how many times to loop.

console.log("\nWhile Loop Example:");
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}


// ============================
// 3. do...while loop
// ============================
// Syntax:
// do {
//     // code to run
// } while(condition);
//
// Difference from while loop:
// - The code runs at least once, even if the condition is false at the start.

console.log("\nDo...While Loop Example:");
let num = 1;
do {
    console.log("Num:", num);
    num++;
} while (num <= 5);


// ============================
// 4. for...of loop
// ============================
// Used to iterate over iterable objects like arrays, strings, maps, etc.
// Gives direct access to values (not indexes).
//
// Syntax:
// for (let value of iterable) {
//     // use value
// }

console.log("\nFor...Of Loop Example:");
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}


// ============================
// 5. for...in loop
// ============================
// Used to iterate over object properties (keys).
// Gives the keys of the object, and we can use them to get values.
//
// Syntax:
// for (let key in object) {
//     // use key and object[key]
// }

console.log("\nFor...In Loop Example:");
let person = { name: "Suvo", age: 21, city: "Kolkata" };
for (let key in person) {
    console.log(key, ":", person[key]);
}


// ============================
// SUMMARY
// ============================
// - for loop: Best when you know how many times to repeat
// - while loop: Best when repetition depends on a condition
// - do...while: Like while, but always runs at least once
// - for...of: Best for looping through arrays or strings (values)
// - for...in: Best for looping through object properties (keys)
//
// Loops are the backbone of many tasks like:
// - Processing lists of data
// - Repeating tasks until a goal is met
// - Automating repetitive operations
