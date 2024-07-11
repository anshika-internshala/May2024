// // Everything inside JavaScript is an Object

// const a = [1 , 2, 3];
// console.log(typeof(a));

// const b = [ 3 , 4];

// a.push(45);

// // arr ---- Array Prototype ----- Object Prototype

// Array.prototype.myMap = function() {
//     console.log("My function");
// }

// Object.getPrototypeOf(a);

// a.myMap();

// console.log(a);
// JavaScript Engine

const abc = {
    firstName: "Anshika",
    lastName: "Agarwal",
    // Shadowing
    toString: function() {
        console.log("Anshika");
    }
}

const user = {
    greet: function() {
        console.log("Greet");
    }
}

abc.__proto__ = user;

abc.greet();

///abc----> Object.prototype

abc.toString();

//console.log(Object.getPrototypeOf(abc));

function abcd() {
    console.log("Hello");
}