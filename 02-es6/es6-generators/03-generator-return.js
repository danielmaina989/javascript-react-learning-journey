function* simpleGen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = simpleGen();
console.log(g.next().value); // 1
console.log(g.return("Done")); // { value: "Done", done: true }
console.log(g.next());         // { value: undefined, done: true }
