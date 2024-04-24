var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];

// find the name and id of those pilots whose functionality Empire

let result = pilots.filter((pilot) => pilot.faction === "Empire");
// console.log(result);
result.forEach((element) => {
  console.log(`The pilot ${element.name} has the id ${element.id}`);
});
