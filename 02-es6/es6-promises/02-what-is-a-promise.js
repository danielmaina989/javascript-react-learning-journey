const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("It worked!");
  } else {
    reject("It failed.");
  }
});

promise.then(result => console.log(result)).catch(err => console.error(err));


// write your promise here that returns a string 'Good Job!' without  timer
const myPromise1 = new Promise((resolve, reject) =>{
resolve("Good Job!");
    
});

// write your promise here that returns a string 'Good Job!'
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Good Job!");
  }, 1000);
});