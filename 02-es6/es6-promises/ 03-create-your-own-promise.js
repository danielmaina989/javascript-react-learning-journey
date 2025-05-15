function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(1000).then(() => console.log("Waited 1 second"));
function customPromiseExample() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5; // Random success or failure
        setTimeout(() => {
            if (success) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected!");
            }
        }, 2000);
    });
}

customPromiseExample()
    .then(result => console.log(result))
    .catch(error => console.error(error));