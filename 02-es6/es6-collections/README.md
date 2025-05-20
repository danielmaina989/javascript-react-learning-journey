# ES6 Collections

Learn how to use powerful new data structures introduced in ES6:

ES6 introduced four new collection types—`Set`, `WeakSet`, `Map`, and `WeakMap`—that provide more flexible and efficient ways to store and manage data compared to traditional arrays and objects. These collections offer features like guaranteed uniqueness, object-only storage, and support for any data type as keys, making them valuable tools for modern JavaScript development.

## Set
- A Set stores unique values.
- You can `.add()`, `.delete()`, `.has()`, and `.clear()` items.
- Maintains insertion order.
- Useful for removing duplicates from arrays.
- **Iteration:** Supports `for...of` and `.forEach()` to loop through values.
    ```js
    const set = new Set([1, 2, 3]);
    for (const value of set) { console.log(value); }
    set.forEach(value => console.log(value));
    ```

## WeakSet
- Stores only objects.
- No `size`, not iterable.
- Useful for memory-safe object tracking.
- Objects in a WeakSet can be garbage collected if there are no other references.
- **Iteration:** Does **not** support iteration (`for...of`, `.forEach()` are not available).

## Map
- Key-value pairs.
- Keys can be any type.
- Use `.set()`, `.get()`, `.delete()`, `.has()`.
- Maintains insertion order.
- Useful for dictionaries or lookup tables.
- **Iteration:** Supports `for...of` (over entries, keys, or values) and `.forEach()`.
    ```js
    const map = new Map([['a', 1], ['b', 2]]);
    for (const [key, value] of map) { console.log(key, value); }
    map.forEach((value, key) => console.log(key, value));
    ```

## WeakMap
- Only accepts objects as keys.
- Not iterable.
- Useful for hiding implementation details or memory-safe metadata storage.
- Keys (objects) can be garbage collected if there are no other references.
- **Iteration:** Does **not** support iteration (`for...of`, `.forEach()` are not available).
