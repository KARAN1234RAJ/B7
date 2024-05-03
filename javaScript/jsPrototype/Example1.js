let myObj = {};

console.log(myObj);
//----------------------------
let person1 ={
     name:"Karan",
     age: 27
}

console.log(person1);
//-----------------------------------
function Person (_name,_age){
     this.name= _name;
     this.age = _age;
}
let person2 = new Person("Manish Kumar",35) 

console.log(person2);