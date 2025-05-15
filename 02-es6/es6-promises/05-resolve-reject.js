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