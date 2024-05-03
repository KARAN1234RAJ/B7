// let pizza = {
//   name: "Margherita",
//   size: "medium",
//   isVegetarian: true,
//   getName: function(){console.log(this.name);}
// };

// // var anotherPizza = JSON.parse(JSON.stringify(pizza));
// console.log(window);
// pizza.getName();

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
}

console.log("City:", user.address.city);
console.log("ZipCode :", user["address"]["zipcode"]);