let user = { id: 1 };

const weakUserMap = new WeakMap();
weakUserMap.set(user, "Active");

console.log(weakUserMap.get(user)); // Active

user = null; // now eligible for garbage collection
