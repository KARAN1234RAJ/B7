// for (var i = 1; i <= 5; i++) {
//      setTimeout(function() {
//        console.log(i); 
//      }, 1000);
//    }
   
   for (var i = 1; i <= 5; i++) {

     (function(j) {

       setTimeout(function() {
         console.log(j); 
       }, 1000);
     }
    )(i);
   }
   

