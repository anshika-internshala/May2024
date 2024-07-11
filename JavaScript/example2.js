const obj1 = { a: 1, b: { c: 2 } };
const obj2 = Object.assign({}, obj1); // Shallow copy

obj2.b.c = 3;

console.log(obj1.b.c); 
console.log(obj2.b.c); 
