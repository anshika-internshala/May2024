const obj = { a: 1 };
const copy = { ...obj };

copy.a = 2;

console.log(obj.a); 
console.log(copy.a); 
