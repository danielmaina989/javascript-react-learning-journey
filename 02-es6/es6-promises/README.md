# ES6 Promises

Promises in ES6 are a powerful way to handle asynchronous operations in JavaScript. They provide a cleaner and more readable alternative to callback functions.

## What is a Promise?

A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states:
1. **Pending**: The initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

## Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed!");
    }
});
```

## Consuming Promises

### Using `.then()` and `.catch()`

```javascript
myPromise
    .then((result) => {
        console.log(result); // Logs: "Operation succeeded!"
    })
    .catch((error) => {
        console.error(error); // Logs: "Operation failed!" if rejected
    });
```

### Using `finally`

```javascript
myPromise
    .finally(() => {
        console.log("Promise completed!");
    });
```

## Chaining Promises

Promises can be chained to handle multiple asynchronous operations in sequence.

```javascript
fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

## Combining Promises

### `Promise.all`

Waits for all promises to resolve or any to reject.

```javascript
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

### `Promise.race`

Returns the result of the first promise to resolve or reject.

```javascript
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

## Async/Await (Built on Promises)

ES6 Promises are the foundation for `async`/`await`, introduced in ES8, which provides a more synchronous-looking way to handle asynchronous code.

```javascript
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
```

## Advantages of Promises

- Avoids "callback hell."
- Provides better error handling with `.catch()`.
- Enables chaining for sequential operations.

## Conclusion

Promises are an essential feature in modern JavaScript for managing asynchronous code. They make code more readable, maintainable, and less error-prone.
