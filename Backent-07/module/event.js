const EventEmitter = require("events");
const Login = new EventEmitter();
console.log("event module ");

Login.addListener("user_login", (user) => {
  console.log(user," is trying to login");
});
Login.on("user_logout", () => {
     console.log("User Logout ");
   });

Login.emit("user_login", "Vinisha11");
Login.emit("user_login","Ranu");
Login.emit("user_login","Angali");
Login.emit("user_logout");
