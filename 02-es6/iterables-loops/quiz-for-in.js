// 1. Loop through object properties and log key and value
const car = {
  brand: "Toyota",
  year: 2022,
  model: "Corolla"
};

for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

// 2. Create a loop that counts how many properties are in the object
let count = 0;
for (const key in car) {
  count++;
}
console.log("Total properties:", count);

// 3. Try using for...in on an array — what do you get?
const nums = [10, 20, 30];
for (const index in nums) {
  console.log(`Index: ${index}, Value: ${nums[index]}`);
}
