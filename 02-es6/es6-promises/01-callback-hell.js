setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);


const errorHandler1 = (err) => {
  console.error('An error occured:', err.message);
};

getUser(
  id,
  (user) => {
    user.getFriends((friends) => {
      friends[0].getSettings((settings) => {
        if (settings.notifications === true) {
          email.send(
            'You are my first friend!',
            (status) => {
              if (status === 200) {
                alert('User has been notified via email!');
              }
            },
            errorHandler
          );
        }
      }, errorHandler);
    }, errorHandler);
  },
  errorHandler
);

// this is a revised version of the code above

const errorHandler = (err) => {
  console.error('An error occured:', err.message);
};

getUser(id)
.then((user) => user.getFriends())
.then((friends) => friends[0].getSettings())
.then((settings) => {
  if (settings.notifications === true) {
    return email.send('You are my first friend!');
  }
})
.then((status) => {
  if (status === 200) {
    alert('User has been notified via email');
  }
})
.catch(errorHandler);


// Geolocation API
// Let’s look at an example of the Geolocation API and its getCurrentPosition() method.
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(
      `User position is at ${position.coords.latitude}, ${
        position.coords.longitude
      }`
    );
  },
  () => {
    console.log('Unable to locate user');
  }
);

// The callback can be transformed into a promise:

const getCurrentPositionPromise = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// We got it! Now we can access the user’s location without using callback syntax:

getCurrentPositionPromise()
.then((position) => {
  console.log(
    `User position is at ${position.coords.latitude}, ${
      position.coords.longitude
    }`
  );
})
.catch(() => {
  console.log('Unable to locate user');
});