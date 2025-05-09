// QUIZ 1: Default Parameter Usage
function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  console.log(greet()); // Expected: Hello, Guest!
  // Explanation: Since no argument was passed, it uses the default "Guest".
  
  // QUIZ 2: Default Parameter with Number
  function add(a, b = 5) {
    return a + b;
  }
  console.log(add(10)); // Expected: 15
  // Explanation: Only one argument is passed. 'b' defaults to 5.
  
  // QUIZ 3: Undefined vs Null with Defaults
  function multiply(a = 2, b = 3) {
    return a * b;
  }
  console.log(multiply(undefined, 4)); // Expected: 8
  // Explanation: 'undefined' triggers the default for 'a', so 2 * 4 = 8
  
  // QUIZ 4: Null Won't Trigger Default
  function subtract(a = 10, b = 5) {
    return a - b;
  }
  console.log(subtract(null)); // Expected: -5
  // Explanation: 'null' is treated as a value, not missing, so null - 5 = -5
  
  // QUIZ 5: Default + Destructuring
  function createUser({ name = "Anonymous", age = 18 } = {}) {
    return `Name: ${name}, Age: ${age}`;
  }
  console.log(createUser()); // Expected: Name: Anonymous, Age: 18
  // Explanation: Default parameter is an object, and it uses destructuring with default values.
  