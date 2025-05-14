# Object Literal Upgrades in ES6

ES6 introduced several enhancements to object literals, making it easier to write and manage objects in JavaScript. Below are the key upgrades:

## 1. **Shorthand Property Names**
You can omit the property value if the variable name matches the property name.

### Example:
```javascript
const name = "John";
const age = 30;

const person = { name, age };
console.log(person); // { name: "John", age: 30 }
```

---

## 2. **Method Definitions**
You can define methods in objects without using the `function` keyword.

### Example:
```javascript
const person = {
    greet() {
        return "Hello!";
    }
};

console.log(person.greet()); // "Hello!"
```

---

## 3. **Computed Property Names**
You can use expressions as property names by enclosing them in square brackets.

### Example:
```javascript
const key = "dynamicKey";

const obj = {
    [key]: "value"
};

console.log(obj.dynamicKey); // "value"
```

---

## 4. **Object.assign()**
ES6 introduced `Object.assign()` to copy properties from one or more source objects to a target object.

### Example:
```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };

Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }
```

---

## 5. **Object Destructuring**
While not strictly part of object literals, destructuring allows you to extract properties from objects into variables.

### Example:
```javascript
const person = { name: "Alice", age: 25 };

const { name, age } = person;
console.log(name); // "Alice"
console.log(age);  // 25
```

---

These upgrades make working with objects in JavaScript more concise and expressive, improving code readability and maintainability.