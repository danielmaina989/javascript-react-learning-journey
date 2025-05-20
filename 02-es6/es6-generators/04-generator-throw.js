function* thrower() {
  try {
    yield "Start";
    yield "Middle";
  } catch (e) {
    console.log("Caught error:", e);
  }
}

const t = thrower();
console.log(t.next().value);   // Start
t.throw("Something went wrong"); // Caught error: Something went wrong
