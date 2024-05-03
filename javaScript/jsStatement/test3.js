function groceryPrice(exp) {
  switch (exp) {
    case "Cookies":
      console.log("Cookies cost 100 rupees");
    case "Milk":
      console.log("Milk cost 60 rupees");
    case "Fruits":
      console.log("Fruits cost 300 rupees");
      break;
    case "Corn Flakes":
      console.log("Corn Flakes cost 150 rupees");
    default:
      console.log(exp + " is not available right now");
  }
}

groceryPrice("Cookies");
