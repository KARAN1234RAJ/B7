let students = [
  { id: "001", name: "Anish", sports: "Cricket" },
  { id: "002", name: "Smriti", sports: "Basketball" },
  { id: "003", name: "Rahul", sports: "Cricket" },
  { id: "004", name: "Bakul", sports: "Basketball" },
  { id: "005", name: "Nikita", sports: "Hockey" },
];

let basketballPlayers = students
  .filter(function (student) {
    return student.sports === "Basketball";
  }).map((student)=>student.name);
  console.log(basketballPlayers);

// console.log("Basketball Players are:");

// basketballPlayers.forEach(function (players) {
//   console.log(players);
// });
