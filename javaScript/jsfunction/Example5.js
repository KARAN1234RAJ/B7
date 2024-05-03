const a = function() {
     console.log('I am from function expression - a');
   };
   //function b is expecting a function as parameter
   function b(ab){ 		
     console.log('Hey I am from function - b');
     ab();
   }
   b(a);	//Function expression 'a' is passed as an argument to 'b'
   