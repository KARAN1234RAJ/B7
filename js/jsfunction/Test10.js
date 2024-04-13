function GrandFather() {
  let car = "Maruti";
  console.log("Hi! I'm GrandFather and I can access", car);
  function Father() {
    //can access car bike
    let bike = "Honda";
    console.log("Hi! I'm Father and I can access", car, bike);
    function Son() {
      //can access car bike cycle
      let cycle = "Hero";
      console.log("Hi! I'm Son and I can access", car, bike, cycle);
    }
    return Son();
  }
  return Father();
}
GrandFather();
