const directions = ['North', 'South', 'East', 'West'];
function demo (val, idx, array) {
  console.log(val);
  if (idx === array.length - 1) {
    console.log ('End of directions');
  }
}
directions.forEach(demo);
