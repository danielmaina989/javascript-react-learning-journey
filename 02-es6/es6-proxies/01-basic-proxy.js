const person = {
  name: "John",
  age: 30
};

const proxyPerson = new Proxy(person, {
  get(target, property) {
    return property in target ? target[property] : "Property not found";
  }
});

console.log(proxyPerson.name);   // John
console.log(proxyPerson.email);  // Property not found
