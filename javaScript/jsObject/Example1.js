let car = {
  make: "Mahendra",
  model: "Thar 4X4",
  year: 2022,
  displayInfo: function () {
    console.log(
      `This ${this.make} ${this.model} was manufactured in ${this.year}`
    );
  },
};

car.displayInfo();

console.log(car); // Outputs the whole object with its
