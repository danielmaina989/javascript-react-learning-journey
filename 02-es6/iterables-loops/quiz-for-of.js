// 🧪 Practice Questions

// 1. Loop through this array and log each value
const animals = ["cat", "dog", "elephant"];
console.log("Animals:");
for (const animal of animals) {
    console.log(animal);
}

// 2. Use for...of to print characters in reverse (hint: convert to array and reverse)
const name = "JavaScript";
console.log("\nCharacters in reverse:");
for (const char of [...name].reverse()) {
    console.log(char);
}

// 3. Loop through this Set and print each item
const fruits = new Set(["apple", "banana", "cherry"]);
console.log("\nFruits:");
for (const fruit of fruits) {
    console.log(fruit);
}
