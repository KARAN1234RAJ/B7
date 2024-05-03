function multiplication(tmp) {
  tmp = tmp * 50;
  return tmp;
}
var num = 30;
var result = multiplication(num);
console.log(num);
console.log(result);

//  we passed the variable num to the multiplication function. Javascript automatically copies the value of variable num to variable tmp. So, here tmp is a new variable that is allocated a new space in the memory and is independent of num.Now all the changes made by the function multiplication are done directly to the variable tmp; thus the value of num remains unaffected.
