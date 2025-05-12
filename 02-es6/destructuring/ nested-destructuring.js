// 🎯 Nested Destructuring Example

const person = {
  name: 'Bob',
  address: {
    city: 'Nairobi',
    zip: 0o100
  }
};

const {
  name,
  address: { city, zip }
} = person;

console.log(`${name} lives in ${city}, ZIP: ${zip}`); // Bob lives in Nairobi, ZIP: 100
