// call , apply , bind methods

// Template Literals

const obj = {
    firstName: "John",
    lastName: "Sharma"
}

function printDetails(hobby, age) {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
    console.log(`My hobby is ${hobby}`);
    console.log(`My age is ${age}`);
}

printDetails.call(obj, "cooking", 12);

const myObj = {
    firstName: "Anshika",
    lastName: "Agarwal"
}

printDetails.call(myObj, "teaching", 23);

// Apply method

printDetails.apply(myObj, ["teaching", 23]);

// Bind method

const func = printDetails.bind(myObj);
func();

// create your own bind function

//printDetails.myBind(myObj,"teaching", 55)

Function.prototype.myBind = function(refObject, ...args) {
    const fn = this;
    console.log(this);
    return function() {
        fn.call(refObject, ...args)
    }
}

const result = printDetails.myBind(myObj, "music", 56);
result();

function abc() {
    console.log(this.firstName);
}

const f = abc.myBind(obj);

console.log(f);
f();






