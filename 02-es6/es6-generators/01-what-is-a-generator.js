function* greetGenerator() {
  yield "Hello";
  yield "World";
}

const greeter = greetGenerator();
console.log(greeter.next().value); // Hello
console.log(greeter.next().value); // World
