# 📚 Array Improvements in ES6

ES6 introduced new methods that make array handling more powerful and expressive. These features simplify the creation, manipulation, and searching of arrays.

---

## 🛠️ Methods Covered

| Method         | Description                                        |
|----------------|----------------------------------------------------|
| `Array.from()` | Converts array-like or iterable to array           |
| `Array.of()`   | Converts a set of arguments to an array            |
| `find()`       | Finds first matching value                         |
| `findIndex()`  | Finds index of first matching value                |
| `fill()`       | Fills array with a static value                    |
| `includes()`   | Checks if array contains a value                   |

---

## 📌 Examples

```js
Array.from('hi');          // ['h', 'i']
Array.of(7);               // [7]
[2, 4, 6].find(x => x > 3) // 4
[1, 2, 3].fill(0);         // [0, 0, 0]
[10, 20, 30].includes(20); // true
