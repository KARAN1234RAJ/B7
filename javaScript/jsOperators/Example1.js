console.log(false || false);// f
console.log(false || true);//t
console.log(10 < 0 || 10 > 50);//f

let value_1 = 10;
let value_2 = -55;
if (value_1 > 0 || value_2 > 0) {
  console.log(
    "Either one or both the values are positive. Please enter negative values only!"
  );
} else {
  console.log("Both the values are negative.");
}
