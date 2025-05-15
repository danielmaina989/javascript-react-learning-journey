const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("It worked!");
  } else {
    reject("It failed.");
  }
});

promise.then(result => console.log(result)).catch(err => console.error(err));


