const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(1); // Ignored, duplicate

console.log(numbers);           // Set(2) {1, 2}
console.log(numbers.has(1));    // true
console.log(numbers.size);      // 2

numbers.delete(1);
console.log(numbers.has(1));    // false
