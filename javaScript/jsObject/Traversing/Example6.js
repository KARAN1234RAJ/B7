// program to loop through an object using for...in loop

const student = {
  name: "Karan",
  age: 27,
  hobbies: ["reading", "games", "coding"],
};

// using Object.entries
// using for...of loop
const student1= Object.entries(student)
console.log(student1);
for (let [key, value] of student1) {
  console.log(key + " - " + value);
}
