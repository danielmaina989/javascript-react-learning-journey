// slice()
const message = "JavaScript is fun!";
const sliced = message.slice(0, 10);
console.log(sliced); // Output: JavaScript

// indexOf()
const greeting = "Hello, world!";
console.log(greeting.indexOf("world")); // Output: 7
console.log(greeting.indexOf("JavaScript")); // Output: -1

// toUpperCase()

const name = "tommy";
console.log(name.toUpperCase()); // Output: TOMMY

// // toUpperCase.js

const loud = "HELLO";
console.log(loud.toLowerCase()); // Output: hello

// repeat()

const laugh = "ha";
console.log(laugh.repeat(3)); // Output: hahaha

// repeat.js
const laughs = "ha";
const repeatedLaugh = laugh.repeat(3); // "hahaha"
const messaged = `The villain laughed: ${repeatedLaugh}!`;

console.log(messaged); 
// Output: The villain laughed: hahaha!


// includes()

const sentence = "Learning JavaScript is fun!";
console.log(sentence.includes("JavaScript")); // Output: true
console.log(sentence.includes("Python")); // Output: false

