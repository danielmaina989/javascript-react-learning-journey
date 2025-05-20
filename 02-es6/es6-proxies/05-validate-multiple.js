function createValidatedUser() {
  const user = {
    name: "",
    age: 0
  };

  return new Proxy(user, {
    set(target, key, value) {
      if (key === "age" && (typeof value !== "number" || value < 0)) {
        throw new Error("Age must be a positive number");
      }
      if (key === "name" && value.length < 2) {
        throw new Error("Name must be at least 2 characters");
      }
      target[key] = value;
      return true;
    }
  });
}

const newUser = createValidatedUser();
newUser.name = "Sam";
newUser.age = 22;
