function groceryPrice(exp) {
  switch (exp) {
    case "Cookies":
      console.log("Cookies cost 100 rupees");
      break;
    case "Milk":
      console.log("Milk cost 60 rupees");
      break;
    case "Fruits":
      console.log("Fruits cost 300 rupees");
      break;
    case "Corn Flakes":
      console.log("Corn Flakes cost 150 rupees");
      break;
    default:
      console.log(exp + " is not available right now");
  }
}

groceryPrice(prompt("Enter  the name of the item you want to buy"));
// groceryPrice("Cookies");
// //output: Cookies cost 100 rupees

// groceryPrice("Fruits");
// //output: Fruits cost 300 rupees

// groceryPrice("Peanut");
// //output: Peanut is not available right now
