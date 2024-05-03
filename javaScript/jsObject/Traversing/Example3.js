let animal = {
  name: "Cow",
  isMammal: true,
  diet: "GreenGrass",
};

let properties = Object.getOwnPropertyNames(animal);
console.log(animal);
for (let property of properties) {
  console.log(property);
} 
