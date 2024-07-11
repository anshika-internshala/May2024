// const promise = new Promise((resolve, reject) => {
//   const bool = false;
//   if (bool) {
//     resolve("Promise is successful");
//   } else {
//     reject("Promise is not successful");
//   }
// });

// pending , onFulfilled , onRejected

// promise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(err));

// Fetch data from server

// fetch() ---> browser

// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Async/await ---> more readable

async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("error in fetching data", err);
  }
}

const data = fetchData();
data.then((res) => console.log(res));
