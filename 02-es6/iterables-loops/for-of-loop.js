// Before ES-6
var fruits = ['apple','banana','orange'];
for (var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}
// apple
// banana
// orange


// Example using for...of with an array

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// cherry

// Example using for...of with a string

const name = "Tom";
for (const letter of name) {
  console.log(letter);
}
// Output:
// T
// o
// m


// Example using for...of with a Set
const uniqueNumbers = new Set([1, 2, 3, 4]);
for (const number of uniqueNumbers) {
  console.log(number);
}
// Output:
// 1
// 2
// 3
// 4

// Example using for...of with a Map
const map = new Map([
  ["name", "Alice"],
  ["age", 30],
]);
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 30

// Iterating over an object
// Objects are non iterable, so how do we iterate over them?
// We have to first grab all the values of the object using something like Object.keys() or the new ES6 function:Object.entries().

const car = {
  maker: "BMW",
  color: "red",
  year : "2010",
}

for (const prop of Object.keys(car)){
  const value = car[prop];
  console.log(prop,value);
}
// maker BMW
// color red
// year 2010

// Example using for...of with a NodeList
const listItems = document.querySelectorAll("li");
for (const item of listItems) {
  console.log(item.textContent);
}
// Output:
// Item 1
// Item 2
// Item 3