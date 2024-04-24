// function User(fName, lName) {
//   this.firstName = fName;
//   this.lastName = lName;
//   this.getFullName = () => `${fName} ${lName}`;
  
// }

// const  user1 = new User("Karan", "Raj");
// console.log(user1.getFullName());

// const user1 ={
//   name: 'Mayank',
//   age :25,
//   city:'Delhi'
// }
// const user2 ={
//   name: 'Rohit',
//   age :26,
//   city:'Indore'
// }

// const user3 ={
//   name: 'Simran',
//   age :30,
//   city:'Delhi'
// }

function User(name,age,city){
  this.name=name;
  this.age=age;
   this.city=city 

}
console.log(User.prototype);
const user1 = new User("Mayank",25,"Delhi");
console.log(user1);

class Book {
  constructor(title , author , pages ) {
    this.title = title ;
    this.author = author ;
    this._pages = pages ;
  }
}