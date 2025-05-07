// Quiz 1: var vs let
function quiz1() {
    var x = 10;
    if (true) {
      var x = 20;
    }
    console.log(x); // 👉 Output: 20 (var is function-scoped)
  }
  quiz1();
  
  // Quiz 2: Arrow function and this
  const quiz2 = {
    age: 15,
    grow: () => {
      this.age++;
    },
  };
  quiz2.grow();
  console.log(quiz2.age); // 👉 Output: 15 (arrow functions do not bind 'this')
  
  // Quiz 3: let & block scope
  function quiz3() {
    let y = 5;
    if (true) {
      let y = 10;
      console.log("Inside block:", y); // 👉 Output: 10
    }
    console.log("Outside block:", y); // 👉 Output: 5
  }
  quiz3();
  
  // Quiz 4: Primitive vs Reference
  const quiz4 = () => {
    let a = 10;
    let b = a;
    b++;
    console.log(a); // 👉 Output: 10 (primitives are copied by value)
  
    const obj1 = { score: 1 };
    const obj2 = obj1;
    obj2.score = 5;
    console.log(obj1.score); // 👉 Output: 5 (objects are passed by reference)
  };
  quiz4();
  
  // Quiz 5: Arrow function returning an object
  const quiz5 = () => {
    const race = "100m";
    const runners = ["Alice", "Bob"];
    const results = runners.map((runner, i) => ({ name: runner, race, place: i + 1 }));
    console.log(results);
    // 👉 Output:
    // [ { name: 'Alice', race: '100m', place: 1 }, { name: 'Bob', race: '100m', place: 2 } ]
  };
  quiz5();
    // Quiz 6: var vs let in loops  