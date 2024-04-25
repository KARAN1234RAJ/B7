var grade = 10;
function student(grade) {
  this.grade = grade;
  console.log(grade);
  console.log(this.grade);
  console.log(window.grade);
}
student(30);
