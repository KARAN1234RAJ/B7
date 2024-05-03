function One() {
  console.log("One is called");
}
One();
function Two(callback) {
  console.log("Two is called");
  callback();
}
Two(One);
