// symbols.js

// Creating two symbols
const sym1 = Symbol("desc");
const sym2 = Symbol("desc");

console.log("Are sym1 and sym2 equal?", sym1 === sym2); // false

// Using a Symbol as a hidden property
const secret = Symbol("secret");
const user = {
  name: "Alice",
  age: 25,
  [secret]: "This is hidden"
};

console.log(user.name); // "Alice"
console.log(user[secret]); // "This is hidden"
console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(secret)]

// Using a Symbol for iteration
const numbers = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const num of numbers) {
  console.log(num); // 1, 2, 3
}

// Q2: How do you get all symbol properties of an object?
const obj = {
  [Symbol("a")]: 1,
  [Symbol("b")]: 2,
  c: 3
};
// To get all symbol properties of an object, use Object.getOwnPropertySymbols
Object.getOwnPropertySymbols(obj)

// Q3: True or False: Symbol properties appear in for...in loops?
// False. Symbol properties do not appear in for...in loops.
