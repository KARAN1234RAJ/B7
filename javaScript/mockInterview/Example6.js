let demo = function () {
  console.log("anonymous functions");
};
demo();

//----------------------------------------
button.addEventListener('click', 
    function(event) {
    alert('Button is clicked!')
})

//===========================================
let area = function(length, breadth){
     return length * breadth 
 }
 let x = area(10,5) 
 console.log("Area of the rectangle is = ", x);
 //========================================
 let y = function (a, b) {return a + b};
