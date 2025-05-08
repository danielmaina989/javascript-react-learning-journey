// Default arguments using object destructuring

function createUser({ name = "Guest", age = 18 } = {}) {
    console.log(`User: ${name}, Age: ${age}`);
  }
  
  createUser({ name: "John", age: 25 }); // User: John, Age: 25
  createUser({ name: "Linda" });         // User: Linda, Age: 18
  createUser();                          // User: Guest, Age: 18
  