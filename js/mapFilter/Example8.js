let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

// let names = [];
// for (let index = 0; index < studentRecords.length; index++) {
//   names.push(studentRecords[index].name.toUpperCase());
// }
// console.log("Names in uppercase : ", names);

// let names = []
// for (const student of studentRecords) {
//     names.push(student.name.toUpperCase());
// }
// console.log(names);

// forEach()
// let names = []
// studentRecords.forEach( student => {
//      names.push(student.name.toUpperCase());
// })
// console.log(names);

// let names = studentRecords.map( stu => stu.name.toUpperCase());
// console.log(names); // logs: [ 'JOHN', 'BABA', 'JOHN', 'WICK' ]

// [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

let names = studentRecords.filter(stu => stu.marks > 50);
console.log(names);
