
const EventEmitter = require("events");

const Login = new EventEmitter();
console.log("Inside event modules");
// event name start-login

const loginHandelar =(user , fileName)=>{
     console.log(user,"Started login");
     console.log("fileName is===", fileName);
}
Login.addListener("start-login", loginHandelar);

Login.emit("start-login","Karan Raj","demoFile");
Login.emit("start-login", "Harsh Raj", "DemoFile2");
