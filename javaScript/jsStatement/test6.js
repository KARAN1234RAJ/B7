var AQI = 340;
if (AQI > 300) {
  result = "Air Quality is BAD";
} else if (AQI > 200) {
  result = "Air Quality is NORMAL";
} else if (AQI > 100) {
  result = "Air Quality is GOOD";
} else {
  result = "Air Quality is EXCELLENT";
}




//===========================================
var result =
  AQI > 300 //if condition
    ? "Air Quality is BAD"  //if first condition satisfies
    : AQI > 200 //first else-if condition
    ? "Air Quality is NORMAL" 
    : AQI > 100 //second else-if condition
    ? "Air Quality is GOOD"
    : "Air Quality is EXCELLENT"; //if all the conditions fail

