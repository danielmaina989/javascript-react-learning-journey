// =====================
// JavaScript Data Types
// =====================

// ✅ PRIMITIVE TYPES (immutable, passed by value)

// 1. String
let name = "John";
console.log(typeof name); // string

// 2. Number
let age = 30;
console.log(typeof age); // number

// 3. Boolean
let isStudent = true;
console.log(typeof isStudent); // boolean

// 4. Null
let emptyValue = null;
console.log(typeof emptyValue); // object (quirk in JS)

// 5. Undefined
let score;
console.log(typeof score); // undefined

// 6. Symbol (unique and immutable)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(typeof sym1); // symbol
console.log(sym1 === sym2); // false (symbols are always unique)

// 7. BigInt (for large integers beyond 2^53)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint

console.log("------------");

// ✅ NON-PRIMITIVE TYPES (mutable, passed by reference)

// 1. Object
const person = {
  name: "Alice",
  age: 25,
};
console.log(typeof person); // object

// 2. Array (special type of object)
const fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // object
console.log(Array.isArray(fruits)); // true

// 3. Function
function greet() {
  return "Hello!";
}
console.log(typeof greet); // function

// 4. Date (built-in object)
const today = new Date();
console.log(typeof today); // object

console.log("------------");

// Example of pass-by-value (primitive)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 - unchanged
console.log(b); // 20

// Example of pass-by-reference (non-primitive)
let original = { value: 1 };
let copy = original;
copy.value = 2;
console.log(original.value); // 2 - modified
console.log(copy.value); // 2 - modified