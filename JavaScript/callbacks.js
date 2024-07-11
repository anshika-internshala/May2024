// function step1(init) {
//   setTimeout(() => {
//     return init + 1;
//   }, 1000);
// }

// function step2(init) {
//   return init + 2;
// }

// function step3(init) {
//   return init + 3;
// }

// function doProcesing() {
//   let value = 0;

//   let result;

//   result = step1(value);
//   result = step2(result);
//   result = step3(result);

//   return result;
// }

// const finalresult = doProcesing();
// console.log("Final result ", finalresult);

// Callbacks

function step1(init, callback) {
  setTimeout(() => {
    callback(init + 1);
  }, 1000);
}

function step2(init, callback) {
  callback(init + 2);
}

function step3(init, callback) {
  callback(init + 3);
}

function processing() {
  step1(0, (result) => {
    step2(result, (result1) => {
      step3(result1, (result2) => {
        console.log(result2);
      });
    });
  });
}

processing();

// Callback Hell
// Pyramid of Doom

// Promises
