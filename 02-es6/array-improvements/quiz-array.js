// Convert the string to an array
const str = "JavaScript";
console.log(Array.from(str));

// Wrap a single value into an array
console.log(Array.of(99));

// Fill an array with the same value
console.log(new Array(3).fill("X"));

// Get the first even number
const nums = [5, 7, 8, 10];
console.log(nums.find(n => n % 2 === 0));

// Check if 15 exists in the array
console.log([10, 15, 20].includes(15));
