/*
core module/ builtin module 
require('moduleName')
Local module/ custom module
require('path');
export module {module1, module2,...}
Third-party module
---------------------
Async way
sync way
*/
const fs = require("fs");
console.log("Start");
/*
// async way
fs.mkdir("./newFile", (err) => {
  if (err) {
    console.log("Error", err.message);
  } else {
    console.log("File create successfully");
  }
});

// sync without error handeling

fs.mkdirSync("newFolderSync12");
console.log("Created ");


// sync with error handeling
try {
  fs.mkdirSync("newFolderSync123");
  console.log("Created ");
} catch (error) {
  console.log("Error is: ", error);
}


// read a directory

fs.readdir("./newFile", (err, dirs) => {
  if (err) {
    console.log("Error", err.message);
  } else {
    console.log("direstories-->", dirs);
  }
});
*/

// delete directory
fs.rm("./newFolderSync123",{recursive:true}, (err) => {
  if (err) {
    console.log("Error", err.message);
  } else {
    console.log("removed");
  }
});
console.log("End");
