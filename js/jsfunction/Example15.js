function intro() {
  introduce = "Hello";
  return function () {
    console.log(introduce + " World!");
  };
}

intro()(); 
