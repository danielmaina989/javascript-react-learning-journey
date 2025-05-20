// Quiz Questions for Generators i

//  Sample Quiz Questions (in `quizzes/proxy-quiz.js`)

`js
// 1. What does a Proxy do in JavaScript?
// a) Stores data securely
// b) Intercepts operations on objects ✅
// c) Enhances performance
// d) Encrypts variables

// 2. What will the following code log?
const obj = { a: 1 };
const p = new Proxy(obj, {
  get(target, prop) {
    return prop in target ? target[prop] : "Not found";
  }
});
console.log(p.b); // ?

// 3. Fill in the blank:
// The `; underscore` trap allows validation before a property is assigned.{three underscore}
// a) get
// b) set ✅
// c) assign
// d) define

// 4. True or False: Proxies can be used to implement custom getters and setters dynamically.

// 5. Fix this code:
const u = new Proxy({}, {
  set(target, key, val) {
    if (key === "age" && typeof val !== "number") throw "Age must be a number";
    target[key] = val;
    return ___;
  }
});`
