const userMap = new Map();

userMap.set('name', 'John');
userMap.set(42, 'The answer');
userMap.set(true, 'isAvailable');

console.log(userMap.get(42));         // The answer
console.log(userMap.has('name'));     // true
console.log(userMap.size);            // 3

userMap.delete(true);
