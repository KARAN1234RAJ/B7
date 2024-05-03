array = [97, 98, 99, 100, 101];

const under_hundred = (x) => x < 100;

if (array.every(under_hundred)) {
  console.log("All are less than 100");
} else {
  console.log("At least one element is not less than 100");
}
