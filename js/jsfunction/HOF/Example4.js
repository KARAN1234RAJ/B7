// add two numbers
function sum(a, b) {
     return a + b
   }
   
   // multiply two numbers
   function mul(a, b) {
     return a * b
   }
   
   //operate with a higher-order function
   function calculate(operation, numsArray) {
     if (numsArray.length <= 2) {
       let a = numsArray[0]
       let b = numsArray[1]
   
       // return a function
       return operation(a, b)
     }
   }
   
   // calculate the sum of two numbers
   console.log(calculate(sum, [5, 6])) // output: 11
   
   // calculate the multiplication of two numbers
   console.log(calculate(mul, [10, 3])) // output: 30
   