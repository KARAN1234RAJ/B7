function enterYourAge(age) {
  var response = age < 18? age<5? "Baby":"Child" :"Adult" ;

  console.log(response);
}

enterYourAge(16);

enterYourAge(21);

// age<5 baby, age <18  child, 19 and above adul</

// condition ? statement: statement

// function checkNumber(num){
//   console.log(num>0?"Positive" :num<0 ? "Negative":"Zero" );

// }

// checkNumber(10)
// checkNumber(-10)
// checkNumber(10-10)
// checkNumber(0)
