let obj1 = { name: "A" };
let obj2 = { name: "B" };

const weakSet = new WeakSet();
weakSet.add(obj1);
weakSet.add(obj2);

// weakSet.add(1); ❌ Invalid, primitives not allowed

console.log(weakSet.has(obj1)); // true
obj1 = null;
// obj1 is now eligible for garbage collection
