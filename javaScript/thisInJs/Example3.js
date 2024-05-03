let  grade = 10;
function student() {
  console.log(this === window); 
  console.log(this.grade); 
  console.log(window.grade);
}
student();
