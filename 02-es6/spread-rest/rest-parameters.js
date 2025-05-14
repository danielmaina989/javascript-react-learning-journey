// Function using the REST operator to gather arguments
function introducePerson(firstName, lastName, ...titles) {
  console.log(`Full Name: ${firstName} ${lastName}`);
  console.log(`Titles: ${titles.join(', ')}`);
}

// Spread an array into the function as individual arguments
const nameDetails = ["Jane", "Doe", "Engineer", "Mentor", "Writer"];

introducePerson(...nameDetails);

/*
Expected Output:
Full Name: Jane Doe
Titles: Engineer, Mentor, Writer
*/

// Explanation:
// - `...titles` collects all additional arguments into an array
// - `...nameDetails` spreads the array elements into individual arguments

// Example 1: Combining REST and SPREAD in a function to merge arrays
function mergeArrays(baseArray, ...additionalElements) {
    const mergedArray = [...baseArray, ...additionalElements];
    console.log(`Merged Array: ${mergedArray}`);
}

const base = [1, 2, 3];
mergeArrays(base, 4, 5, 6);

/*
Expected Output:
Merged Array: 1,2,3,4,5,6
*/

// Example 2: Using REST to collect arguments and SPREAD to pass them to another function
function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function calculateSumAndLog(...values) {
    const total = sumNumbers(...values);
    console.log(`Sum of values: ${total}`);
}

calculateSumAndLog(10, 20, 30, 40);

/*
Expected Output:
Sum of values: 100
*/