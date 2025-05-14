# Symbols in JavaScript

## Introduction
Symbols are a unique and immutable primitive data type introduced in ECMAScript 6 (ES6). They are primarily used to create unique identifiers for object properties, ensuring no property name conflicts.

## Key Features
- **Uniqueness**: Every symbol is guaranteed to be unique, even if created with the same description.
- **Immutability**: Symbols are immutable and cannot be changed once created.
- **Non-enumerable**: Symbol properties are not included in `for...in` or `Object.keys()` iterations.

## Syntax
```javascript
const mySymbol = Symbol();
const mySymbolWithDescription = Symbol('description');
```

## Use Cases
1. **Unique Object Properties**:
    Symbols are often used to define unique keys for object properties to avoid accidental overwrites.
    ```javascript
    const id = Symbol('id');
    const user = {
         [id]: 12345,
         name: 'John Doe'
    };
    console.log(user[id]); // 12345
    ```

2. **Hiding Implementation Details**:
    Symbols can be used to create "hidden" properties that are not accessible through normal object iteration.
    ```javascript
    const secret = Symbol('secret');
    const obj = {
         [secret]: 'hiddenValue',
         visible: 'visibleValue'
    };
    console.log(Object.keys(obj)); // ['visible']
    ```

3. **Customizing Built-in Behavior**:
    Symbols like `Symbol.iterator` and `Symbol.toStringTag` allow customization of built-in object behaviors.
    ```javascript
    const iterable = {
         [Symbol.iterator]: function* () {
              yield 1;
              yield 2;
              yield 3;
         }
    };
    for (const value of iterable) {
         console.log(value); // 1, 2, 3
    }
    ```

## Global Symbol Registry
Symbols can be registered globally using `Symbol.for()` and retrieved using `Symbol.keyFor()`.
```javascript
const globalSymbol = Symbol.for('shared');
const sameSymbol = Symbol.for('shared');
console.log(globalSymbol === sameSymbol); // true
console.log(Symbol.keyFor(globalSymbol)); // 'shared'
```

## Built-in Symbols
JavaScript provides several built-in symbols for customizing object behavior:
- `Symbol.iterator`: Defines the default iterator for an object.
- `Symbol.toStringTag`: Customizes the default string description of an object.
- `Symbol.hasInstance`: Customizes `instanceof` behavior.
- And more...

## Conclusion
Symbols are a powerful feature in JavaScript that enable developers to create unique, non-conflicting object properties and customize object behavior. They are especially useful in large-scale applications and libraries where property name collisions can occur.

## References
- [MDN Web Docs: Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [ECMAScript Specification](https://tc39.es/ecma262/#sec-symbol-objects)