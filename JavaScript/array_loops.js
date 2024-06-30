// Higher Order Functions

// HOF are the functions which take another function as argument

function print(language) {
    console.log("anshika");
    console.log(language);
}

// Function Declaration

// function abc(print) {
//     print("javaScript");
// }

const abc = (print) => print("javascript"); // Function expression

abc(print);

// abc is a higher order function

// function which is passed as a parameter is called as callback function

// forEach Loop

const a = [ 1, 2, 3];
a.forEach((val) => {
    console.log(val * 2);
})

console.log(a);

// map method in array

// transform all the contents of an array

const b = [ 3 , 4, 5, 6];

// output = [ 6 ,8, 10, 12]

// map method of array and returns a new array

const result = b.map((val) => {
    return val * 2;
});

console.log(result);

// filter --- filter values based on condition

const c = [1 , 2, 3, 4, 5, 6];

// filter even numbers from an array

const evenNumbers = c.filter((val) => {

   console.log(val);
   return val % 2 == 0

});

console.log(evenNumbers);

// Function Declaration
// function xyz() {
//     console.log("Hello");
// }

// xyz();

xyz();

function xyz() {
    console.log("helloo")
}

// Function Expression
// var xyz = () => {
//     console.log("Hello");
// }

// const values cannot be reinitialized

const bb = [ 2, 3, 4, 5];







