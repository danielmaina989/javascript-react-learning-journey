function sum(a, b, c) {
  return a + b + c;
}

const nums = [5, 10, 
20];

const result = sum(...nums);
console.log(result); // 35
//
// Spread operator with function arguments
function multiply(x, y, z
    ) {
    return x * y * z;
}
const numbers = [2, 3, 4];
const product = multiply(...numbers);
console.log(product); // 24
//

// Spread in object literals
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }
//
// Spread in array literals
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
//
// Spread in function calls
const arr3 = [7, 8, 9];
const max = Math.max(...arr3);
console.log(max); // 9
