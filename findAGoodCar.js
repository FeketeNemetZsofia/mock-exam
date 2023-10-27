function findAGoodCar(cars, expectations) {
  let carArray = [];
  for (let car of cars) {
    if (
      car.manufacturer === expectations.manufacturer &&
      car.yearOfManufacturing >= expectations.yearOfManufacturing &&
      car.km < expectations.km &&
      car.price <= expectations.price
    ) {
      carArray.push(car);
    }
  }
  if (carArray.length === 0) {
    return null;
  } else return carArray;
}

module.exports = findAGoodCar;
