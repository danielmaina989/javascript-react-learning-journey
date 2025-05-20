function* loopNames(names) {
  for (let name of names) {
    yield `Hello, ${name}`;
  }
}

const names = ["Alice", "Bob", "Charlie"];
const greeter = loopNames(names);

for (let greeting of greeter) {
  console.log(greeting);
}
