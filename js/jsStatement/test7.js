function getGroceryByPrice(price) {
  switch (price) {
    case 100:
      console.log("book");

    case 50:
      console.log("copy");

    case 20:
      console.log("pen");

     default:
      console.log("Nothing is available  in this price range.");
  }
}

getGroceryByPrice(parseInt(prompt("Enter the price of your item :")));
