# Spread and Rest Operators in JavaScript

## Overview
The **spread** and **rest** operators are powerful features introduced in ES6. Both use the `...` syntax but serve different purposes depending on the context.

---

## Spread Operator (`...`)
The spread operator is used to expand elements of an array or object into individual elements. It is commonly used for copying, merging, or passing elements.

### Examples

1. **Copying Arrays**:
    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1];
    console.log(arr2); // [1, 2, 3]
    ```

2. **Merging Arrays**:
    ```javascript
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const merged = [...arr1, ...arr2];
    console.log(merged); // [1, 2, 3, 4]
    ```

3. **Spreading in Function Calls**:
    ```javascript
    const numbers = [1, 2, 3];
    console.log(Math.max(...numbers)); // 3
    ```

4. **Copying Objects**:
    ```javascript
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1 };
    console.log(obj2); // { a: 1, b: 2 }
    ```

5. **Merging Objects**:
    ```javascript
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const merged = { ...obj1, ...obj2 };
    console.log(merged); // { a: 1, b: 2 }
    ```

---

## Rest Operator (`...`)
The rest operator collects multiple elements into a single array or object. It is often used in function parameters or destructuring assignments.

### Examples

1. **Function Parameters**:
    ```javascript
    function sum(...numbers) {
         return numbers.reduce((total, num) => total + num, 0);
    }
    console.log(sum(1, 2, 3)); // 6
    ```

2. **Array Destructuring**:
    ```javascript
    const [first, ...rest] = [1, 2, 3, 4];
    console.log(first); // 1
    console.log(rest);  // [2, 3, 4]
    ```

3. **Object Destructuring**:
    ```javascript
    const { a, ...rest } = { a: 1, b: 2, c: 3 };
    console.log(a);    // 1
    console.log(rest); // { b: 2, c: 3 }
    ```

---

## Key Differences
| Feature            | Spread Operator                | Rest Operator                  |
|--------------------|--------------------------------|--------------------------------|
| **Purpose**        | Expands elements              | Collects elements             |
| **Use Case**       | Arrays, objects, function calls | Function parameters, destructuring |
| **Context**        | Expanding                     | Gathering                     |

---

## Conclusion
The spread and rest operators simplify working with arrays, objects, and function arguments. Mastering these operators can make your JavaScript code more concise and readable.

---  