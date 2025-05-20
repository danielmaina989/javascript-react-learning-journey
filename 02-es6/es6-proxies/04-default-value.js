const settings = {
  theme: "dark"
};

const defaultSettings = new Proxy(settings, {
  get(target, key) {
    return key in target ? target[key] : "Not set";
  }
});

console.log(defaultSettings.theme);    // dark
console.log(defaultSettings.layout);   // Not set
