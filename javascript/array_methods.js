// ============================
// JavaScript Arrays & Methods
// ============================

// ----------------------------
// WHAT IS AN ARRAY?
// ----------------------------
// An array is a data structure that stores multiple values in one variable.
// Arrays can hold different data types: numbers, strings, objects, or even other arrays.

let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);

// ============================
// BASIC ARRAY METHODS
// ============================

// 1. push() - Add element to the END
fruits.push("Mango");
console.log("After push:", fruits);

// 2. pop() - Remove element from the END
fruits.pop();
console.log("After pop:", fruits);

// 3. unshift() - Add element to the START
fruits.unshift("Strawberry");
console.log("After unshift:", fruits);

// 4. shift() - Remove element from the START
fruits.shift();
console.log("After shift:", fruits);

// 5. length - Get number of elements in array
console.log("Length:", fruits.length);

// 6. indexOf() - Find index of an element
console.log("Index of Banana:", fruits.indexOf("Banana"));

// 7. includes() - Check if element exists in array  if it includes it return true 

let cities=['kolkata','mumbai','delhi'];
 let  findcities=cities.includes('kolkata');
 console.log(findcities);
 

// 8. slice(start, end) - Extract part of array (does not modify original)
let sliced = fruits.slice(0, 2);
console.log("Sliced (0,2):", sliced);

// 9. splice(start, deleteCount, item1, item2, ...) - Add/Remove items (modifies original)
fruits.splice(1, 1, "Grapes"); // Remove 1 item at index 1 and add "Grapes"
console.log("After splice:", fruits);

// 10. concat() - Merge arrays into a new one
let moreFruits = ["Pineapple", "Watermelon"];
let allFruits = fruits.concat(moreFruits);
console.log("Concatenated:", allFruits);

// 11. join(separator) - Convert array to string
console.log("Joined string:", fruits.join(" - "));

// ============================
// ADVANCED ARRAY METHODS
// ============================

// 12. forEach() - Run a function for each element
console.log("\nforEach Example:");
fruits.forEach(function(fruit, index) {
    console.log(index, fruit);
});

// 13. map() - Create new array by applying a function to each element
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("map Example:", upperCaseFruits);

// 14. filter() - Create new array with elements that pass a test
let longNamedFruits = fruits.filter(fruit => fruit.length > 5);
console.log("filter Example:", longNamedFruits);

// 15. reduce() - Reduce array to a single value
let numbers = [10, 20, 30];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("reduce Example (sum):", sum);



//merging two arrays into one ; have to use .concat method with 2nd one

let city1=["mumbai","tokio"];
let city2=["japan","paris"];
let mergecities=city1.concat(city2);
console.log(mergecities);
console.log(typeof city1);

