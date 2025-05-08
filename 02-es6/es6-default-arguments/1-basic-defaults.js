// Default arguments example - basic usage

function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
  }
  
  greet("Fridah", "Welcome"); // Welcome, Fridah!
  greet("Alex");              // Hello, Alex!
  greet();                    // Hello, Guest!
  

