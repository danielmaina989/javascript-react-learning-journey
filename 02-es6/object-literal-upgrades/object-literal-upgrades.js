// Property shorthand
const name = "Alice";
const age = 30;

const person = {
  name, // same as name: name
  age,  // same as age: age

  // Method shorthand
  greet() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  },

  // Computed property name
  ['isAdult']: age >= 18
};

console.log(person);
console.log(person.greet()); // Hello, my name is Alice and I'm 30 years old.
console.log(person.isAdult); // true
