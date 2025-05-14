// Sample Quiz on Object Literal Upgrades in ES6

// Question 1: What will be the output of the following code?
const name = "John";
const age = 25;
const person = { name, age };
console.log(person);
// Answer: { name: "John", age: 25 }

// Question 2: Rewrite the following object using object literal shorthand:
const color = "red";
const size = "medium";
const item = {
    color: color,
    size: size,
};
// Answer:
const itemShorthand = { color, size };

// Question 3: What is the purpose of method shorthand in object literals?
// Answer: It allows defining methods in objects without using the `function` keyword.

// Question 4: Convert the following object to use method shorthand:
const calculator = {
    add: function (a, b) {
        return a + b;
    },
};
// Answer:
const calculatorShorthand = {
    add(a, b) {
        return a + b;
    },
};

// Question 5: What will be the output of the following code?
const key = "dynamicKey";
const value = 42;
const obj = {
    [key]: value,
};
console.log(obj);
// Answer: { dynamicKey: 42 }

// Question 6: Explain computed property names in object literals.
// Answer: Computed property names allow you to use expressions as property names in an object, enclosed in square brackets.
