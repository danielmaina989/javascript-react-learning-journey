// The for in loop is a bit different because it will iterate over
// ... all the enumerable properties of an object in no particular order.

// It will also iterate over properties that are in the prototype chain.
// So, if you have an object with properties that are not enumerable,
// the for in loop will still iterate over them.
//// This is not the case with the for of loop.


// The for in loop is not recommended for iterating over arrays
// because it will iterate over all the properties of the array object,
// not just the elements of the array.

const car = {
  maker: "BMW",
  color: "red",
  year : "2010",
}
for (const prop in car){
  console.log(prop, car[prop]);
}
// maker BMW
// color red
// year 2010

// Example 2
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    occupation: "Developer",
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// firstName: John
// lastName: Doe
// age: 25
// occupation: Developer
