# 🔁 Iterables and Looping in ES6

JavaScript introduced a powerful new way to loop over iterable data structures with `for...of`. This is especially useful for working with arrays, strings, sets, and more.

---

## ✅ `for...of`

Used to loop over **iterable values** such as arrays, strings, maps, and sets.

### Syntax:
```js
for (const element of iterable) {
    // use element
}
```

---

## ✅ `for...in`

The `for...in` loop is used to iterate over the **enumerable properties** of an object. Unlike `for...of`, it works with object keys rather than iterable values.

### Syntax:
```js
for (const key in object) {
    // use key
}
```

### Key Differences Between `for...of` and `for...in`:
- `for...of` iterates over **values** of an iterable (e.g., arrays, strings, sets).
- `for...in` iterates over **keys** of an object or indices of an array.

### Example:
```js
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
    console.log(key, obj[key]); // Logs: a 1, b 2, c 3
}
```
  // use element
}


