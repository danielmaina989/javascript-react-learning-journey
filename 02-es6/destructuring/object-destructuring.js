// 🎯 Object Destructuring Example

const user = {
  name: 'Alice',
  age: 30,
  country: 'Kenya'
};

// Extract properties
const { name, age, country } = user;

console.log(name);    // Alice
console.log(age);     // 30
console.log(country); // Kenya

const person = {
  name: "Alberto",
  last: "Montalesi",
  links: {
    social: {
      facebook: "https://www.facebook.com/alberto.montalesi"
    },
    website: "http://albertomontalesi.github.io/"
  }
};

const { facebook } = person.links.social;
console.log(facebook); // ✅ Correct: outputs the Facebook URL
// console.log(person.links.social.facebook); // ❌ Incorrect: outputs the Facebook URL

// Explanation:

// facebook: fb renames the facebook property to a new variable fb.

// The original facebook is not defined in the outer scope, hence the error.