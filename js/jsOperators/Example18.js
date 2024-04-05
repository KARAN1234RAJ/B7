const student = {
     Name : "Jake",
     Address: {
         PostCode : 123
     },
   };
   
   console.log(student?.Name);  // Jake
   console.log(teacher?.Name);  //undefined
   console.log(teacher.Name);  //error
   