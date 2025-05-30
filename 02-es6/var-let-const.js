// var is function-scoped
function testVar() {
    if (true) {
      var name = "Alice";
    }
    console.log(name); // ✅ Accessible outside block
  }
  testVar();
  
  // let is block-scoped
  function testLet() {
    if (true) {
      let age = 25;
      console.log(age); // ✅ Inside block
    }
    // console.log(age); // ❌ ReferenceError - not accessible outside block
  }
  testLet();
  
  // const is also block-scoped and immutable
  const person = {
    name: 'Alberto',
    age: 25,
  };
  person.age = 26; // ✅ You can change object properties
  console.log(person.age);
  
  // Object.freeze example
  const frozenPerson = Object.freeze({
    name: 'Luca',
    age: 30
  });
  frozenPerson.age = 35; // ❌ No error, but it won’t change
  console.log(frozenPerson.age); // 30


  // // example 
  // Let’s finish this lesson with a quick exercise.
  // Modify the code such that all six console logs print out their values exactly once, and the printed values are the following:

// 1 3
// 1 3
// 1 2
// 5
// 5 6
// 1 2 

//Edit this code
'use strict';

var guessMe1 = 1;
let guessMe2 = 2;

{
    try {
        console.log( guessMe1, guessMe2 ); // (A)
    } catch(err){console.log("Error");}
    let guessMe2 = 3;
    console.log( guessMe1, guessMe2 ); // (B)
}

console.log( guessMe1, guessMe2 ); // (C)

const print_func = () => {   
    console.log( guessMe1 ); // (D)
    var guessMe1 = 5;
    let guessMe2 = 6;
    console.log( guessMe1, guessMe2 ); // (E)
};

console.log( guessMe1, guessMe2 ); // (F)
  