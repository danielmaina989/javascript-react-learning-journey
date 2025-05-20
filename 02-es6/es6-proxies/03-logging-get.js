const product = {
  name: "Laptop",
  price: 999
};

const loggedProduct = new Proxy(product, {
  get(target, key) {
    console.log(`Accessed property: ${key}`);
    return target[key];
  }
});

console.log(loggedProduct.name);  // Logs: Accessed property: name
