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
  