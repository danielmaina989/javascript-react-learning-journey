Promise.resolve("Resolved immediately").then(console.log);
Promise.reject("Rejected immediately").catch(console.error);

// Example of Promise.resolve
// Promise.resolve creates a promise that is immediately resolved with the given value.
Promise.resolve("Resolved immediately")
  .then((value) => {
    console.log("Promise resolved with value:", value); // Logs: "Promise resolved with value: Resolved immediately"
  })
  .catch((error) => {
    console.error("This will not run because the promise was resolved.");
  });

// Example of Promise.reject
// Promise.reject creates a promise that is immediately rejected with the given reason.
Promise.reject("Rejected immediately")
  .then((value) => {
    console.log("This will not run because the promise was rejected.");
  })
  .catch((error) => {
    console.error("Promise rejected with reason:", error); // Logs: "Promise rejected with reason: Rejected immediately"
  });

  // Example using Promise.resolve
  const resolvedPromise = Promise.resolve(42);
  resolvedPromise.then((value) => {
    console.log("Resolved value from resolvedPromise:", value); // 42
  });

  // Example using Promise.reject
  const rejectedPromise = Promise.reject("Something went wrong");
  rejectedPromise.catch((error) => {
    console.error("Rejected reason from rejectedPromise:", error); // Something went wrong
  });

  // promise.all and promise.race

  // Example using Promise.all
  // Promise.all waits for all promises to resolve, or rejects if any promise rejects.
  const promise1 = Promise.resolve(1);
  const promise2 = Promise.resolve(2);
  const promise3 = Promise.resolve(3);

  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log("Promise.all resolved values:", values); // [1, 2, 3]
    })
    .catch((error) => {
      console.error("Promise.all rejected with reason:", error);
    });

  // Example using Promise.race
  // Promise.race resolves or rejects as soon as one of the promises resolves or rejects.
  const slowPromise = new Promise((resolve) => setTimeout(() => resolve("slow"), 100));
  const fastPromise = new Promise((resolve) => setTimeout(() => resolve("fast"), 10));

  Promise.race([slowPromise, fastPromise])
    .then((value) => {
      console.log("Promise.race resolved value:", value); // "fast"
    })
    .catch((error) => {
      console.error("Promise.race rejected with reason:", error);
    });


// 
function myPromise(){
    return new Promise((resolve,reject) => {
        reject();
    })
}

myPromise()
    .then(() => {
        console.log('1')
    })
    .then(() => {
        console.log('2')
    })
    .catch(() => {
        console.log('3')
    })
    .then(() => {
        console.log('4')
    });
// Output:
// 3, 

// Explanation:
// 1. The promise is rejected, so the first `.then()` is skipped.
// 2. The `.catch()` is executed, logging '3'.
// 3. The final `.then()` is executed, logging '4'.
// 4. The promise chain ends here.