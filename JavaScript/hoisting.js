console.log(a);
var a = 20;
console.log(a);

// Does hoisting work with let & const ? ---> hoisted but they stay in tdz
// TDZ --- temporal dead zone (let , const)

print();

// Function Declaration

function print() {
    console.log("Hello");
}

// Function Expression

// Arrow Functions

var print1 = () => {

}

print1();
