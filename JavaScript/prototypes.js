// Everything inside JavaScript is an Object

const a = [1 , 2, 3];
console.log(typeof(a));

const b = [ 3 , 4];

a.push(45);

// arr ---- Array Prototype ----- Object Prototype

Array.prototype.myMap = function() {
    console.log("My function");
}

Object.getPrototypeOf(a);

a.myMap();

console.log(a);
// JavaScript Engine