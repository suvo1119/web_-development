// //default import 
// import multiply from "./mathopt.js";
// console.log(multiply(2,5))


// //named import 


// import { add,subtract } from "./mathopt.js";


// console.log(add(6,7));
// console.log(subtract(8,4));





//2nd way to import function  my module


const operation= require("./mathopt.js");
console.log(operation.add(7,8));