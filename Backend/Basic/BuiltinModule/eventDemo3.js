const EventEmitter = require("events");

const Login = new EventEmitter();
const handle1 = () => {
  console.log(" from Handle -1");
};
const handle2 = () => {
  console.log(" from Handle -2");
};
// Login.addListener()
Login.on("Login_Failed", handle1);
Login.on("Login_Failed", handle2);

Login.emit("Login_Failed");
// Login.off("Login_Failed", handle2);
// Login.removeListener("Login_Failed", handle2);
// Login.removeAllListeners("Login_Failed");


Login.emit("Login_Failed");
console.log("Count---", Login.listenerCount("Login_Failed"));
