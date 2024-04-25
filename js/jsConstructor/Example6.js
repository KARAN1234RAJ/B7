function MyClass() {
     if (new.target) {
       console.log('MyClass was called with new');
     } else {
       console.log('MyClass was not called with new');
     }
   }
   
  //  new MyClass(); 
   
   MyClass(); 