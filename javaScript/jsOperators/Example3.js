let user = {
  isAuthenticated: prompt("Please enter your username"),
  username: "",
};

user.username = user.isAuthenticated || "guest";

console.log("Username:", user.username);

// let num1 = parseInt(prompt("enter 1st number"));

// let num2 = Number(prompt("enter 2nd number"));

// let sum = num1  + num2;
// console.log(`Sum of ${num1} and  ${num2} is ${sum}`);
