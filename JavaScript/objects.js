const myObj = {
    favouriteNumber: 12,
    hobby: "Cooking",
    value: {b: "c"}
}

// Any function written inside an object is called a method

// Objects are the foundations of Prototypes

// Shallow copy and deep copy

//Shallow copy ---->>> copied one object into another object

// Shallow copy ---- Object.assign , spread operator

const anotherObj = Object.assign({}, myObj);

anotherObj.value.b = "a";
anotherObj.hobby = "dancing";
console.log(anotherObj);
console.log(myObj);

const spreadObj = {...myObj};
// spreadObj.hobby ="dancing";
console.log(spreadObj);

// deep copy --- It copies the entire object
// JSON.stringify and JSON.parse
// structuredClone

const deepObj = structuredClone(myObj);

deepObj.value.b = "1";
console.log(deepObj);
console.log(myObj);

const abc = JSON.parse(JSON.stringify(myObj));
abc.value.b = "2";
console.log(abc);
console.log(myObj);

