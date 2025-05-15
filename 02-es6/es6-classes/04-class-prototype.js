function Car(brand) {
  this.brand = brand;
}
Car.prototype.drive = function () {
  console.log(`${this.brand} is driving.`);
}

const car = new Car("Toyota");
car.drive();
