const list = [
  {
    name: "Michael Scott",
    company: "Dunder Mufflin",
    designation: "Regional Manager",
    show: "The Office",
  },
  {
    name: "Barney Stinson",
    company: "Golaith National Bank",
    designation: "Please",
    show: "How I met your mother",
  },
  {
    name: "Jake Peralta",
    company: "NYPD",
    designation: "Detective",
    show: "Brooklyn 99",
  },
];

list.forEach(function (element) {
  element.favCharacter = "true";
});

console.table(list);
