let students = [
  { id: "001", name: "Anish", sports: "Cricket" },
  { id: "002", name: "Smriti", sports: "Basketball" },
  { id: "003", name: "Rahul", sports: "Cricket" },
  { id: "004", name: "Bakul", sports: "Basketball" },
  { id: "005", name: "Nikita", sports: "Hockey" },
  { id: "006", name: "Anish", sports: "Cricket" },
];

// find the basketball played name
const getStudentByBb = students.filter(
  (student) => student.sports === "Basketball" && student.id === "006"
);
console.log(getStudentByBb);

//  filter out the student who plays cricket  and has a id 1006

const getStudentByCricket = students.find(
  (student) => student.sports === "Cricket" && student.name === "Anish1"
);
//    console.log(getStudentByCricket.map((x)=> x.name));
// console.log(getStudentByCricket.name);

const isPlayerExist = getStudentByCricket ? true : false;
console.log(isPlayerExist);
console.log(
  isPlayerExist ? getStudentByCricket.name : "Not Exit"
);
