// ============================
// JavaScript Prototype Example (__proto__)
// ============================

// Object 1: Base object
let computer = {
    cpu: 12
};

// Object 2: Inherits from computer
let lenovo = {
    screen: "HD",
    __proto__: computer // Prototype link
};

// Object 3: Empty object
let tomHardware = {};

// ----------------------------
// Accessing properties via prototype chain
console.log("lenovo.cpu:", lenovo.cpu); 
// Found in computer via __proto__

console.log("lenovo.screen:", lenovo.screen); 
// Found directly in lenovo

// ----------------------------
// Checking prototype links
console.log("lenovo.__proto__ === computer:", lenovo.__proto__ === computer); // true
console.log("computer.__proto__ === Object.prototype:", computer.__proto__ === Object.prototype); // true
console.log("Object.prototype.__proto__:", Object.prototype.__proto__); // null (end of chain)

// ----------------------------
// Adding property to prototype (computer)
computer.gpu = "RTX 4060";
console.log("lenovo.gpu:", lenovo.gpu); // Inherited from computer

// ----------------------------
// tomHardware is empty and has default prototype (Object.prototype)
console.log("tomHardware.__proto__:", tomHardware.__proto__);




//another  better method of prototype 



let computer={
    cpu:12
};

let mac ={
    screen: "full hd"
};
let ubuntu ={
    keyboard:"blue"
}
//Object.setPrototypeOf(mac,computer);
Object.setPrototypeOf(mac,ubuntu);
//console.log(mac.cpu);
console.log(Object.getPrototypeOf(mac))
