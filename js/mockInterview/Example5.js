let originalArr = ["GrowTech", "Center", "is", "the"];

function pushArray(tmpArr) {
  tmpArr.push("best");
  console.log(tmpArr);
  tmpArr.push("in Indore");
}

console.log(originalArr);
pushArray(originalArr);
console.log(originalArr);
