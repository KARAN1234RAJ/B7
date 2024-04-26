// Create a thenable promise-like object
const thenablePromise = {
     then(onFulfilled, onRejected) {
       // Simulate an asynchronous operation
       setTimeout(() => {
         const result = Math.random();
         if (result > 0.5) {
           onFulfilled(result);
         } else {
           onRejected(new Error('Promise rejected'));
         }
       }, 1000);
     }
   };
   
   // Use the thenable promise-like object
   thenablePromise
     .then((result) => {
       console.log('Fulfilled:', result);
     }, (error) => {
       console.error('Rejected:', error);
     });
   
   