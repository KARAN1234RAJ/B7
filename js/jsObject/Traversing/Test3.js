const list = [
  {
    name: "Michael Scott",
    company: "Dunder Mufflin",
    designation: "Regional Manager",
    show: "The Office",
    responsibility: "heart of the show",
  },
  {
    name: "Barney Stinson",
    company: "Golaith National Bank",
    designation: "Please",
    show: "How I met your mother",
    responsibility: "heart of the show",
  },
  {
    name: "Jake Peralta",
    company: "NYPD",
    designation: "Detective",
    show: "Brooklyn 99",
    responsibility: "heart of the show",
  },
];

list.every((element) => (element.responsibility = "making people laugh")); // every method is used to iterate through the array

console.table(list);
