const EventEmitter = require("events");
// events
// Login sinario
const Login = new EventEmitter();
console.log("Inside event modules");
// event name start-login

// Login.addListener("start-login", () => {
//   console.log("user Started Login");
// });

Login.addListener("start-login", (user) => {
     console.log(user," Started Login");
     // task-1 Store the user in a file  with time
   });

Login.addListener("Validating", () => {
  console.log("user Validated");
});
Login.addListener("Login_success", () => {
  console.log("user Login successfully");
});
Login.emit("start-login");
Login.emit("start-login");

Login.emit("Validating");
Login.emit("Login_success");
Login.emit("start-login", "Karan");
Login.emit("start-login", "Karan Raj");
