const getCakeIngredients = (ingred_1) =>{ // function is declared here
     return (ingred_2) => {
         return (ingred_3) => {
             return (`${ingred_1}, ${ingred_2}, ${ingred_3}`); 
         } 
     } 
 } 
 getCakeIngredients('Eggs')('flour')('milk');
 