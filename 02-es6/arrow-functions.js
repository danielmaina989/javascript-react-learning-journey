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
  