function sendReq(greet){  
     return function(name){ 
         return function(message){ 
             return `${greet} ${name}, ${message}`
         }
     }
 }
 sendReq('Hello')('Karan')('Can you please add me in your Group ?')
 