const user = {
  age: 25
};

const validatedUser = new Proxy(user, {
  set(target, key, value) {
    if (key === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }
    target[key] = value;
    return true;
  }
});

validatedUser.age = 30; // ✅
console.log(validatedUser.age);

// validatedUser.age = "old"; // ❌ Throws TypeError
