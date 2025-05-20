// Sample Quiz Questions (in `quizzes/generator-quiz.js`)

```js
// 1. What keyword is used to pause a generator function?
// a) yield  ✅
// b) await
// c) pause
// 1. What keyword is used to pause and resume a generator function in JavaScript?
// a) yield  ✅
// b) await
// c) pause
// d) stop

// 2. What will be logged by the following code?
function* g() {
    yield 10;
    yield 20;
}
const it = g();
console.log(it.next().value); // ?

// 3. Which method is used to end a generator and provide a final value?
// a) throw
// b) next
// c) return ✅
// d) stop

// 4. True or False: Generators in JavaScript can be used with Promises for asynchronous flows.

// 5. Fill in the blank to handle errors inside a generator:
function* myGen() {
    try {
        yield 1;
        yield 2;
    } catch(e) {
        console.log("Error:", e);
    }
}

// 2. What will be logged?
function* g() {
  yield 10;
  yield 20;
}
const it = g();
console.log(it.next().value); // ?

// 3. Which method ends a generator and provides a final value?
// a) throw
// b) next
// c) return ✅
// d) stop

// 4. True or False: Generators can be combined with Promises for async flows

// 5. Fill in the blank:
function* myGen() {
  try {
    yield 1;
    yield 2;
  } catch(e) {
    console.log("Error:", e);
  }
}
const it = myGen();
console.log(it.next().value);
 // 1`
