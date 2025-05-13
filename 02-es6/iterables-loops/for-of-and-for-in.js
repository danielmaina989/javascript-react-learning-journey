// differences between for of and for in
const arr = [1, 2, 3, 4, 5];
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// for...of loop
for (const value of arr) {
  console.log(value); // 1, 2, 3, 4, 5
}
// for...in loop
for (const key in obj) {
  console.log(key); // a, b, c
}
// for...of loop with string
const str = "hello";
for (const char of str) {
  console.log(char); // h, e, l, l, o
}
// for...in loop with string
for (const index in str) {
  console.log(index); // 0, 1, 2, 3, 4
}
// for...of loop with Set
const set = new Set([1, 2, 3]);
for (const value of set) {
  console.log(value); // 1, 2, 3
}
// for...in loop with Set
for (const key in set) {
  console.log(key); // 0, 1, 2
}
// for...of loop with Map
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
for (const [key, value] of map) {
  console.log(key, value); // a 1, b 2
}
// for...in loop with Map
for (const key in map) {
  console.log(key); // 0, 1
}
// for...of loop with NodeList
const nodeList = document.querySelectorAll("div");
for (const node of nodeList) {
  console.log(node); // <div></div>, <div></div>, ...
}
// for...in loop with NodeList
for (const index in nodeList) {
  console.log(index); // 0, 1, 2, ...
}
// for...of loop with arguments object
function example() {
  for (const arg of arguments) {
    console.log(arg); // prints each argument passed to the function
  }
}
example(1, 2, 3); // 1, 2, 3

// for...in loop with arguments object
function example() {
  for (const index in arguments) {
    console.log(index); // prints the index of each argument passed to the function
  }
}
example(1, 2, 3); // 0, 1, 2
// for...of loop with array-like object
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
for (const value of Array.from(arrayLike)) {
  console.log(value); // a, b
}
// for...in loop with array-like object
for (const index in arrayLike) {
  console.log(index); // 0, 1, length
}