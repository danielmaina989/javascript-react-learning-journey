# ES6 Generators

Generators are functions that can pause and resume execution using the `yield` keyword. They allow better control over iteration and async workflows.

## Topics Covered
- Creating generators with `function*`
- Yielding values and controlling flow
- `.return()` to stop execution early
- `.throw()` to handle generator errors
- Using generators with Promises

## Basic Example
```js
function* gen() {
  yield "A";
  yield "B";
}

const g = gen();
console.log(g.next()); // { value: "A", done: false }
console.log(g.next()); // { value: "B", done: false }
console.log(g.next()); // { value: undefined, done: true }

## How Generators Work
