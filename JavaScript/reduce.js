// returns the single value

// print sum of all values of the array

const a = [ 1 , 2, 3,4, 5];

let sum  = 0;

for(let i=0; i<a.length; i++)
 {
    sum = sum + a[i];
 }

 console.log("sum ", sum);

 // reduce

 const result = a.reduce((sum, curr) => {
    return sum+curr;
 },0);

 console.log("result", result);

 /**
  * 0 + 1 = 1
  * 1 + 2 = 3
  * 3 + 3 = 6
  * 6 + 4 = 10
  * 10 + 5 = 15
  */

