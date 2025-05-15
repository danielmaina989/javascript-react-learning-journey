class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak();

// our initial class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
  }
}

// create a new class that extends Person and adds new property to it
class Adult extends Person {
  constructor(name, age, work) {
    super(name, age); // call the parent constructor
    this.work = work; // new property
  }
}

function testResult() {
  const me = new Adult('Alberto', 27, 'software developer');
  return me.work;
  // expected output: "software developer"
}

console.log(testResult()); // Output: software developer

// explanation
// Adult uses extends Person to inherit properties and methods.

// super(name, age) calls the constructor of the Person class.

// this.work = work adds the new work property.

