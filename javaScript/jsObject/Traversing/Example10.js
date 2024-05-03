var brook = {
     name: "One Indian Girl",
     Outher: "Chetan Bhagat",
   };
   
   console.log(brook);
   brook.year = "2018";
   
   console.log(brook);

   delete  brook["Outher"];
   console.log(brook["Outher"]);
   console.log(brook);
   if (typeof brook ["Outher"] == 'undefined'){
       console.log("The author of the book is not defined");
   }else{
       console.log("Author of the book : "+brook["Outher"]);
   }