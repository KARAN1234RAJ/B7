const EventEmitter = require("events");
const Login = new EventEmitter();

const handler1 = () => {
  console.log("User-1");
};
const handler2 = () => {
  console.log("User-2");
};
const handler3 = () => {
  console.log("User-3");
};

Login.on("user_logout", handler1);
Login.on("user_logout", handler2);
Login.emit("user_logout");
Login.off("user_logout", handler1)

Login.off("user_logout", handler2)
Login.on("user_logout", handler3);

Login.emit("user_logout");
