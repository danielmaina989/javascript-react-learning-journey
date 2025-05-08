// Combining destructuring and default arguments

const config = {
    theme: "dark",
    notifications: true,
  };
  
  function setup({ theme = "light", notifications = false } = {}) {
    console.log(`Theme: ${theme}`);
    console.log(`Notifications: ${notifications}`);
  }
  
  setup(config);       // Theme: dark, Notifications: true
  setup();             // Theme: light, Notifications: false