function func1() {
  console.log(arguments[0]);
  arguments[1] = "I am new value"; 
  console.log("In function func1, y = ", arguments[1]);
}
x = "Hello Guys!";
y = "I am old value";
func1(x, y);
console.log("In global, y = ", y);
