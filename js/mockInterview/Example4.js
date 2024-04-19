let originalObj = {
     name: "Karan",
     age: 27,
     location: "Gaya"
     };
     
     function demo(tmpObj) { 
       tmpObj.location = "BodhGaya"; 
       console.log(tmpObj.location); 
     } 
     
     console.log(originalObj.location);   
     demo(originalObj);             
     console.log(originalObj.location);    
     