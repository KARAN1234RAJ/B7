//By literal method
let car = {
  name: "Maruti",
  model: "Swift",
  color: "red",
  price: 550000,
};
car.color = "black";
//By constructor method
let bike = new Object();
bike.name = "Pulsar";
bike.model = "Dominar";
bike.color = "red";
bike.price = 200000;

console.log(car);
console.log(bike);

console.log(car.name);
console.log(bike["name"]);
console.log(car["color"]);