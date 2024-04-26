// Creating a new promise
var promise = new Promise((resolve, reject) => {
     resolve('Success!');
   });
   
   promise.then(value => {
     console.log(value); 
   }, reason => {
     console.error(reason); 
   });
   