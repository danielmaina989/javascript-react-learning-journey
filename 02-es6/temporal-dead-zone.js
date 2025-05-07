// TDZ: Trying to access `let` or `const` before declaration
// console.log(myVar); // ❌ ReferenceError
let myVar = 10; // only accessible from here
console.log(myVar); // ✅ 10
