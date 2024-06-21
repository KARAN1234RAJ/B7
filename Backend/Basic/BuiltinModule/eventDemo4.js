const EventEmitter = require("events");

const Login = new EventEmitter();
const handle1 = () => {
  console.log(" from Handle -1");
};
const handle2 = () => {
  console.log(" from Handle -2");
};
const handle3 = () => {
  console.log(" Runs only ones");
};

Login.on("Login_Failed", handle1);
Login.on("Login_Failed", handle2);
Login.once("Login_Failed", handle3);



Login.emit("Login_Failed")
Login.emit("Login_Failed")

