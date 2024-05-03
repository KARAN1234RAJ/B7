let subject = {
  topic: "javascript",
  about: function () {
    console.log("JS is amazing");
  },
}; //base class
let course = {
  __proto__: subject,
  instructor: "professor",
}; //inherited from subject
let department = {
  __proto__: course,
  dept_name: "IT",
}; //inhserited from course
let student = {
  __proto__: department,
  id: 1,
}; // inherited from department
// console.log(student.dept_name);
console.log(subject);
