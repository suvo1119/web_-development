// ============================
// JavaScript If-Else & Conditions - Introduction
// ============================

// ----------------------------
// WHAT IS A CONDITION?
// ----------------------------
// A condition is an expression that evaluates to TRUE or FALSE.
// Conditions are used to control the flow of the program.
// We use comparison operators (==, ===, !=, >, <, >=, <=) and logical operators (&&, ||, !) in conditions.

// ----------------------------
// if Statement
// ----------------------------
// Syntax:
// if (condition) {
//     // code runs if condition is TRUE
// }

console.log("If Statement Example:");
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

// ----------------------------
// if...else Statement
// ----------------------------
// Syntax:
// if (condition) {
//     // if condition is TRUE
// } else {
//     // if condition is FALSE
// }

console.log("\nIf...Else Example:");
let marks = 40;
if (marks >= 50) {
    console.log("You passed the exam.");
} else {
    console.log("You failed the exam.");
}

// ----------------------------
// if...else if...else Statement
// ----------------------------
// Syntax:
// if (condition1) {
//     // code if condition1 is TRUE
// } else if (condition2) {
//     // code if condition2 is TRUE
// } else {
//     // code if none of the conditions are TRUE
// }

console.log("\nIf...Else If...Else Example:");
let score = 85;
if (score >= 90) {
    console.log("Grade: A+");
} else if (score >= 75) {
    console.log("Grade: A");
} else if (score >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// ----------------------------
// NESTED IF
// ----------------------------
// An if statement inside another if statement

console.log("\nNested If Example:");
let username = "Suvo";
let password = "12345";
if (username === "Suvo") {
    if (password === "12345") {
        console.log("Login successful!");
    } else {
        console.log("Incorrect password.");
    }
} else {
    console.log("User not found.");
}

// ----------------------------
// LOGICAL OPERATORS WITH CONDITIONS
// ----------------------------
// && (AND) - TRUE if both conditions are TRUE
// || (OR)  - TRUE if at least one condition is TRUE
// !  (NOT) - Reverses the condition's result

console.log("\nLogical Operators Example:");
let temperature = 25;
let isSunny = true;

// Using AND
if (temperature > 20 && isSunny) {
    console.log("Nice weather for a walk!");
}

// Using OR
if (temperature < 15 || !isSunny) {
    console.log("Might want to stay inside.");
} else {
    console.log("Weather looks fine.");
}





//check if a given variable is number or not 

let num1=102;
if(typeof num1 === 'number'){
    console.log("this is a number");
    
}
else{
    console.log('not a number');
    
}

 

//checking if a array is empty or not
 
let students=[1,1,3];
console.log(students.length);


if(students.length === 0){
    console.log('array is empty');
    
}
else {
    console.log('array is not empty');
    
}

// ============================
// SUMMARY
// ============================
// - if: Runs code if condition is true
// - else: Runs if previous condition(s) are false
// - else if: Checks another condition if previous is false
// - Nested if: An if inside another if
// - Logical operators allow combining multiple conditions
