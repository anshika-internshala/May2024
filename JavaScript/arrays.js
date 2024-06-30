const arr = [1 , 2, 3, 4, 5];

const a = [1, true, "Internshala", 6];

console.log(a[2]);

// length

console.log(a.length);

a[1] = false;



console.log(typeof(a));

// Array methods

const result = a.toString();


console.log(typeof(result));

const res = a.join("..");
console.log(res);

// pop
let n = [ 1 , 3 , 5];
const value = n.pop();

console.log(n); //[1, 3]
console.log(value); // 5

// push
let x = n.push(9);
let u = n.push(10); // [1 , 3 , 9, 10]
console.log(n); // [1 , 3, 9, 10]
console.log(u) // returns new length --- 4

// shift -- removes element from beginning and returns the removed element
let q = n.shift();
console.log(q); // 1

// unshift --- adds element in beginning  and returns the new length
let z = n.unshift(8);
console.log(n); //[8 , 3, 9, 10]
console.log(z); // 4

// delete
delete n[2];
console.log(n); // [ 8 , 3, <empty space>, 10];

// concat

let n1 = [ 6 , 8, 9];
n = n.concat(n1); 
console.log(n);

const aa = "";
const s = null;

var r;
console.log(typeof(r));
console.log(typeof(s));

// 7 types of primitive datatypes

// 1. null

console.log(NaN === NaN);

console.log(typeof(NaN));

// sort

const t = [ 7 , 9 , 80, 81,  5];

// [ 5, 7, 9 , 80]

t.sort(); // sorts all elements in array alphabetically

t.sort((a, b) => a - b); // ascending

// 7 , 9 , 80, 5, 81

// 7 , 9 , 5, 80, 81

// 7 , 5 , 9 , 80 , 81
// 5 , 7 , 9 , 80, 81


t.sort((a, b) => b - a); // descending
console.log(t);

// splice 

const aaa = [ 3 , 5 , 7 , 8];

aaa.splice(1 , 2 , 6 , 77 );

console.log(aaa); // [ 3 , 6 , 77, 8]

// toSpliced

// slice

const qq = aaa.slice(1,4);

console.log(qq);

// reverse

// aaa.reverse();



const reverseArray = aaa.toReversed();

console.log(reverseArray);







