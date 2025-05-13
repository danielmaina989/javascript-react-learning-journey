// Array.from()
const str = "hello";
const chars = Array.from(str); // ['h', 'e', 'l', 'l', 'o']

// Array.of()
const numbers = Array.of(1, 2, 3); // [1, 2, 3]
// Array.fill()
const arr = new Array(3).fill("X"); // ['X', 'X', 'X']
// Array.find()
const nums = [5, 7, 8, 10];
const firstEven = nums.find(n => n % 2 === 0); // 8
// Array.includes()
const hasFifteen = [10, 15, 20].includes(15); // true
// Array.entries()
const arr2 = ['a', 'b', 'c'];
const entries = arr2.entries(); // Array Iterator
for (const [index, value] of entries) {
  console.log(index, value); // 0 'a', 1 'b', 2 'c'
}
// Array.keys()
const keys = arr2.keys(); // Array Iterator
for (const key of keys) {
  console.log(key); // 0, 1, 2
}
// Array.values()
const values = arr2.values(); // Array Iterator
for (const value of values) {
  console.log(value); // 'a', 'b', 'c'
}
// Array.flat()
const nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
const flatArray = nestedArray.flat(2); // [1, 2, 3, 4, 5, 6, 7]
// Array.flatMap()
const arr3 = [1, 2, 3];
const flatMapped = arr3.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
// Array.fromAsync()
const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 3) {
          return Promise.resolve({ value: i++, done: false });
        } else {
          return Promise.resolve({ done: true });
        }
      }
    };
  }
};
const asyncArray = Array.from(asyncIterable); // [0, 1, 2]
// Array.prototype.at()
const arr4 = [1, 2, 3];
const lastElement = arr4.at(-1); // 3
// Array.prototype.copyWithin()
const arr5 = [1, 2, 3, 4, 5];
const copied = arr5.copyWithin(0, 3); // [4, 5, 3, 4, 5]
// Array.prototype.fill()
const arr6 = [1, 2, 3];
const filled = arr6.fill(0, 1, 3); // [1, 0, 0]
// Array.prototype.flat()
const arr7 = [1, 2, [3, 4], [5, [6, 7]]];
const flat = arr7.flat(2); // [1, 2, 3, 4, 5, 6, 7]
// Array.prototype.flatMap()
const arr8 = [1, 2, 3];
const flatMapped2 = arr8.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]


