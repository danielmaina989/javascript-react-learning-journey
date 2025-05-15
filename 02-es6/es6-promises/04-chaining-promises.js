function addOne(num) {
  return new Promise(resolve => {
    setTimeout(() => resolve(num + 1), 500);
  });
}

addOne(1)
  .then(addOne)
  .then(addOne)
  .then(result => console.log(`Result: ${result}`)); // Result: 4


// Example of handling errors in a promise chain
addOne(1)
    .then(addOne)
    .then(() => {
        throw new Error("Something went wrong!");
    })
    .then(addOne)
    .catch(error => console.error(`Caught an error: ${error.message}`));

// Example of using finally in a promise chain
addOne(1)
    .then(addOne)
    .then(addOne)
    .finally(() => console.log("Promise chain completed."));