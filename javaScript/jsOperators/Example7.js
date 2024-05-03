console.log(!true);//f
console.log(!10);//f
console.log(!0);//t

const val_1 = 5;
const val_2 = -1;

if (!(val_1 < 0 || val_2 < 0)) {
  console.log(true);
} else {
  console.log(false);
}
//f