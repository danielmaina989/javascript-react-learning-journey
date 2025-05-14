const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]
//
// Spread operator with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }
//
// Spread operator with function arguments
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); // 6
//
// Spread operator with strings
const str = "Hello";
const chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

//
// Spread operator with sets
const set1 = new Set([1, 2, 3]);
const set2 = new Set([4, 5, 6]);
const combinedSet = new Set([...set1, ...set2]);
console.log(combinedSet); // Set { 1, 2, 3, 4, 5, 6 }
//

// Spread operator with maps
const map1 = new Map([[1, 'a'], [2, 'b']]);
const map2 = new Map([[3, 'c'], [4, 'd']]);
const combinedMap = new Map([...map1, ...map2]);
console.log(combinedMap); // Map { 1 => 'a', 2 => 'b', 3 => 'c', 4 => 'd' }
//
// Spread operator with arrays in function calls
function logArgs(...args) {
  console.log(args);
}
const arr3 = [1, 2, 3];
logArgs(...arr3); // [1, 2, 3]
//
// Spread operator with array destructuring
const arr4 = [1, 2, 3, 4, 5];
const [first, ...rest] = arr4;
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]
//
// Spread operator with array concatenation
const arr5 = [1, 2];
const arr6 = [3, 4];
const concatenated = [...arr5, ...arr6];
console.log(concatenated); // [1, 2, 3, 4]
//
// Spread operator with array copying
const arr7 = [1, 2, 3];
const copiedArray = [...arr7];
console.log(copiedArray); // [1, 2, 3]
//
// Spread operator with array slicing
const arr8 = [1, 2, 3, 4, 5];
const slicedArray = [...arr8.slice(1, 4)];
console.log(slicedArray); // [2, 3, 4]
//
// Spread operator with array filtering
const arr9 = [1, 2, 3, 4, 5];
const filteredArray = [...arr9.filter(n => n > 2)];
console.log(filteredArray); // [3, 4, 5]
//
// Spread operator with array mapping
const arr10 = [1, 2, 3];
const mappedArray = [...arr10.map(n => n * 2)];
console.log(mappedArray); // [2, 4, 6]
