const student = {
     Name : "Jake",
     Address: {
         PostCode : 123
     },
     Grades: {
         Physics: 100
         Chemistry: 99
         Maths: 82
     },
   };
   
   
   return student?.Address?.PostCode //123
   return student.Street.PostCode //error
   return student?.Grades?.Maths //82
   return student?.Total?.English //undefined
   return student.Total.English //error
   