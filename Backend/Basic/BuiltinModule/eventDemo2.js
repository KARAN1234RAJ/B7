const EventEmitter = require("events");

const Login = new EventEmitter();
console.log("Inside event modules");
// event name start-login
// Multiple Event if we have
const loginHandelar1 = (user, fileName) => {
  // console.log(user,"Started login");
  // console.log("fileName is===", fileName);
  console.log("From handelar-1");
};

const loginHandelar2 = (user, fileName) => {
  // console.log(user,"Started login");
  // console.log("fileName is===", fileName);
  console.log("From handelar-2");
};

const loginHandelar3 = (user, fileName) => {
  // console.log(user,"Started login");
  // console.log("fileName is===", fileName);
  console.log("From handelar-3");
};
Login.addListener("start-login", loginHandelar1);
Login.addListener("start-login", loginHandelar2);

Login.emit("start-login", "Karan Raj", "demoFile");

Login.addListener("start-login", loginHandelar3);

Login.emit("start-login", "Harsh Raj", "DemoFile2");
