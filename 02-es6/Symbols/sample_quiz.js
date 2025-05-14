// Sample Quiz Questions for Symbols in JavaScript

// Question 1
console.log("Question 1: What is a Symbol in JavaScript?");
console.log("a) A primitive data type that represents a unique identifier");
console.log("b) A built-in object for handling collections of data");
console.log("c) A method to convert strings to numbers");
console.log("d) A special type of array");

// Question 2
console.log("\nQuestion 2: How do you create a Symbol in JavaScript?");
console.log("a) Symbol.create()");
console.log("b) new Symbol()");
console.log("c) Symbol()");
console.log("d) Symbol.new()");

// Question 3
console.log("\nQuestion 3: Can two Symbols with the same description be equal?");
console.log("a) Yes");
console.log("b) No");

// Question 4
console.log("\nQuestion 4: What is the purpose of the Symbol.for() method?");
console.log("a) To create a new unique Symbol");
console.log("b) To retrieve or create a Symbol from a global registry");
console.log("c) To compare two Symbols");
console.log("d) To delete a Symbol");

// Question 5
console.log("\nQuestion 5: Which of the following is a use case for Symbols?");
console.log("a) Creating unique object property keys");
console.log("b) Storing large datasets");
console.log("c) Converting strings to numbers");
console.log("d) Performing mathematical operations");

// Question 6
// What is the correct output of the following code?
const friends = {
  "Tom" : "bff",
  "Jim" : "brother",
  "Tom" : "cousin",
}

for (friend in friends){
  console.log(friend);
}

// Question 6
// What is the correct output of the following code?
const family = {
  [Symbol("Tom")] : "father",
  [Symbol("Jane")] : "mother",
  [Symbol("Tom")] : "brother",
};

const symbols = Object.getOwnPropertySymbols(family);
console.log(symbols);

// Answers
console.log("\nAnswers:");
console.log("1: a");
console.log("2: c");
console.log("3: b");
console.log("4: b");
console.log("5: a");