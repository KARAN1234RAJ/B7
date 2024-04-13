function gifts(inp) {
  var output = "You will get ";

  switch (inp) {
    case "30":
      output += "Pencils ";
    case "20":
      output += "Pen ";
    case "10":
      output += "Bag";
      break;

      //the output statement will get chained and then will be console logged
      console.log(output);
    default:
      console.log("Unfortunately you wont get anything!");
  }
}

gifts("10");

gifts("30");

gifts("20");

gifts("5");
