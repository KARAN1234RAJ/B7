const info = {
  name: "Amit Gupta",
  email: "xyz@gmail.com",
  age: 22,
  dob: "08/02/2000",
};

// Iterate over the info object using for..in loop

for (const key in info) {
  console.log(`${key}: ${info[key]}`);
}
