function welcome(name) {
  console.log(name, "Welcome to the Grow Center!");
}
welcome(function () {
  return "Karan";
});

//=================================

setTimeout(function () {
  console.log("I will run after 5 seconds!");
}, 5000);
