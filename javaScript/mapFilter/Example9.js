//Problem Statement: Retrieve the details of students who scored
//more than 50 marks and have id greater than 120.

let names = studentRecords.filter((stu) => stu.marks > 50 && stu.id > 120);
console.log(names); //logs: [ { name: 'John', id: 123, marks: 98 } ]
