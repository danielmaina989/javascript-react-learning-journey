// Ternary operations inside template literals
const isMember = true;
const fee = `Membership fee is ${isMember ? "$10" : "$20"}`;
console.log(fee); // Membership fee is $10
