const fs = require("fs");
// console.log(fs);
console.log("start");
// Async way
// fs.mkdir("./newFile", (err) => {
//   console.log("Inside Callback");
//   if (err) {
//     console.log("error", err.message);
//   } else {
//     console.log("Directory Created");
//   }
// });

// Sync Way

// fs.mkdirSync('./syncFile')
// console.log("File created sucessfully");

//Sollution
// try {
//   fs.mkdirSync("./syncFile12");
//   console.log("File created sucessfully");
// } catch (error) {
//   console.log("Error is : ", error.message);
// }

// read a directory

// fs.readdir("./newFile", (err, dirs) => {
//   if (err) {
//     console.log("error", err.message);
//   } else {
//     console.log("Directories are -->>", dirs);
//   }
// });

// delete directory
// deleted only empty directory
// fs.rmdir("./syncFile", (err) => {
//   if (err) {
//     console.log("error", err.message);
//   } else {
//     console.log("Directories deleted");
//   }
// });
// deleted all the directory
fs.rm("./syncFile12", { recursive: true }, (err) => {
  if (err) {
    console.log("error", err.message);
  } else {
    console.log("Directories deleted");
  }
});

console.log("End");
