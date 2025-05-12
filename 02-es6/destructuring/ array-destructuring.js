// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays
// , or properties from objects, into distinct variables.

// 🎯 Array Destructuring Example

const colors = ['red', 'green', 'blue'];

// Extract values
const [first, second, third] = colors;

console.log(first);  // red
console.log(second); // green
console.log(third);  // blue
 

// swapping values
let hungry = "yes";
let full = "no";


function testResult(hungry,full){
    [hungry, full] = [full, hungry]
    return `${hungry}, ${full}`;
    // no yes
}

function swapValues(x, y) {
  return [y, x]; // return values in swapped order
}

let a = 5;
let b = 10;

console.log("Before swap:");
console.log("a =", a); // 5
console.log("b =", b); // 10

[a, b] = swapValues(a, b);

console.log("After swap:");
console.log("a =", a); // 10
console.log("b =", b); // 5


let arr = [ "one", "two", "three" ];

function testResult(arr){
    // your code goes here
    // in one line, define one variable for each value in the array
    const [one, two, three] = arr
    return `${one}, ${two}, ${three}`
    // expected output "one, two, three"
}

const colors_1 = ['red', 'green', 'blue'];

// Destructuring the array into individual variables
const [firstColor, secondColor, thirdColor] = colors_1;

console.log(firstColor);  // 'red'
console.log(secondColor); // 'green'
console.log(thirdColor);  // 'blue'

// Given the array below
const fruits = ['apple', 'banana', 'cherry'];

// TODO: Use array destructuring to assign each fruit to a variable

// Your code here:
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);  // expected: 'apple'
console.log(secondFruit); // expected: 'banana'
console.log(thirdFruit);  // expected: 'cherry'


