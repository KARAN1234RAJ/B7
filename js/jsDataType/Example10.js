let car = {
  name: "Maruti",
  model: "Swift",
  color: "red",
  price: 550000,
  about: function () {
    return `This is a ${this.name}, of ${this.color} color.`;
  },
};

console.log(car.about());
