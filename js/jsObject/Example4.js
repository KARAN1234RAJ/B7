// Adding methods to the car object
let car = {
  name: "BLACKBIRD",
  maker: "TATA",
  engine: "2000cc",
  start: function () {
    console.log("Starting the engine...");
  },
};
car.start();
// Adding method stop() later to the object
car.stop = function () {
  console.log("Applying Brake...");
};
car.stop();
