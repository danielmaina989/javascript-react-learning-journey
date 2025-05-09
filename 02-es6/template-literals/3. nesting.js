// Nesting templates
const person = {
    name: "Lana",
    hobby: "painting"
  };
  
  const message = `My friend is ${person.name}, and her favorite hobby is ${`${person.hobby}`}.`;
  console.log(message); // My friend is Lana, and her favorite hobby is painting.
  