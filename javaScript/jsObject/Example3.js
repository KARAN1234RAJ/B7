// Simple function
function vehicle(name,maker,engine){
	this.name = name;
	this.maker = maker;
	this.engine = engine;
}
// New keyword to create an object
let car = new vehicle('TATA','BlackBird','2000cc');
// Property accessors
console.log(car.name);
console.log(car.maker);
console.log(car['engine']);
