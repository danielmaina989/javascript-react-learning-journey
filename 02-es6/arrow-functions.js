// Traditional function
function add(a, b) {
    return a + b;
  }
  console.log(add(2, 3)); // 5
  
  // Arrow function (ES6)
  const addArrow = (a, b) => a + b;
  console.log(addArrow(2, 3)); // 5
  
  // Arrow function with one parameter
  const square = x => x * x;
  console.log(square(4)); // 16
  
  // Arrow functions and `this` keyword
  const obj = {
    name: 'React Student',
    regularFunction: function () {
      console.log("Regular:", this.name);
    },
    arrowFunction: () => {
      console.log("Arrow:", this.name); // undefined (lexical this)
    }
  };
  
  obj.regularFunction(); // React Student
  obj.arrowFunction();   // undefined
  
  // Arrow Functions with .map() - Example

// A race name
const race = "100m dash";

// List of runners
const runners = ["Usain Bolt", "Justin Gatlin", "Asafa Powell"];

// Using .map() to create a new array with detailed result objects
const results = runners.map((runner, i) => (
  {
    name: runner,      // current runner's name
    race,              // shorthand for race: race
    place: i + 1       // index + 1 to represent 1st, 2nd, 3rd place
  }
));

// Output the result
console.log(results);

// Output:
// [
//   { name: 'Usain Bolt', race: '100m dash', place: 1 },
//   { name: 'Justin Gatlin', race: '100m dash', place: 2 },
//   { name: 'Asafa Powell', race: '100m dash', place: 3 }
// ]
// ✅ 1. USE: Arrow function for short callbacks (like map, filter, etc.)


const race_ex = "100m dash";
const runners_ex = ["Usain Bolt", "Justin Gatlin", "Asafa Powell"];

const results_ex = runners.map((runner, i) => ({
  name: runner,
  race,
  place: i + 1,
}));

console.log("Race Results:", results);

// ❌ 2. AVOID: Arrow function inside object method – `this` will not refer to object
const person = {
  name: "Alex",
  greet: () => {
    console.log(`Hi, I'm ${this.name}`); // ❌ 'this' is not person
  },
};
person.greet(); // Output: Hi, I'm undefined

// ✅ Instead, use regular function to maintain `this` context
const correctPerson = {
  name: "Jamie",
  greet() {
    console.log(`Hi, I'm ${this.name}`); // ✅ correct `this`
  },
};
correctPerson.greet(); // Output: Hi, I'm Jamie

// ❌ 3. AVOID: Arrow function can't be used as a constructor
const Car = () => {
  this.brand = "Toyota";
};
// const myCar = new Car(); // ❌ TypeError: Car is not a constructor

// ✅ Use regular function for constructors
function Bike() {
  this.brand = "Honda";
}
const myBike = new Bike();
console.log("My bike brand is:", myBike.brand); // Honda

// ❌ 4. AVOID: Arrow function doesn't have `arguments`
const showArgs = () => {
  // console.log(arguments); // ❌ ReferenceError
};

function showArgsCorrect() {
  console.log("Arguments are:", arguments); // ✅ works
}
showArgsCorrect(1, 2, 3); // Arguments are: [Arguments] { '0': 1, '1': 2, '2': 3 }

// ✅ 5. USE: Lexical `this` in nested functions
const team = {
  name: "Red Warriors",
  members: ["Alice", "Bob", "Charlie"],
  printMembers() {
    this.members.forEach(member => {
      console.log(`${member} is in team ${this.name}`);
    });
  },
};
team.printMembers();
// Output:
// Alice is in team Red Warriors
// Bob is in team Red Warriors
// Charlie is in team Red Warriors
