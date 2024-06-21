const fs = require("fs");
const { writeFile, appendFile, readFile } = fs;

const fsPromise = require("fs/promises");

// Operations on file
//1. file path
//2. content
//3. callback

// writeFile("./names.txt", "Karan Raj", (err) => {
//   if (err) {
//     console.log("error", err.message);
//   } else {
//     console.log("file written successfully");
//   }
// });

// appendFile("./namesList.txt", " Kararn", (err) => {
//      if (err) {
//        console.log("error", err.message);
//      } else {
//        console.log("file written successfully");
//      }
//    });

// read the file

// readFile("./namesList.txt", (err, content) => {
//   if (err) {
//     console.log("error", err.message);
//   } else {
//     console.log("file written successfully", content.toString());
//   }
// });

// readFile("./namesList.txt","utf-8", (err, content) => {
//      if (err) {
//        console.log("error", err.message);
//      } else {
//        console.log("file written successfully", content);
//      }
//    });

const readFilePromise = async () => {
  try {
    const content = await fsPromise.readFile("./namesList.txt");
    console.log("content", content.toString());
  } catch (error) {
    console.log("err", err.message);
  }
};

readFilePromise()