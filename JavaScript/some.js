// returns true if even one value in the array passes the condition

const a = [ 1 , 2, 3, 4, 5];

// whether any value is even or not

const result = a.some(val => val % 2 == 0);
console.log(result);

// every
//returns true if all the values in the array passes the condition

const arr = [1 , 2, 3, 4, 5];

const result1 = arr.every(val => val % 2 == 0);
console.log(result1);
