function* asyncFlow() {
  const data = yield fetchData();
  console.log("Received:", data);
}

function fetchData() {
  return new Promise((resolve) => setTimeout(() => resolve("Loaded"), 1000));
}

function handle(gen) {
  const iterator = gen();

  function step(result) {
    if (result.done) return;
    result.value.then(res => step(iterator.next(res)));
  }

  step(iterator.next());
}

handle(asyncFlow);

// Output:
// Received: Loaded
//