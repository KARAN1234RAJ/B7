const fs = require("fs");
// const { writeFile, appendFile, readFile } = fs;

const fsPromise = require("fs/promises");

/*
// Operations in file
// 1-> file path
// 2-> Content
// 3-> callback

writeFile('./names.txt',"wefsrh g", (error)=>{
     if (error) {
          console.log("Error", error.message);
        } else {
          console.log("Written successfully");
        }

})


appendFile("nameList", " Mayank", (error) => {
  if (error) {
    console.log("Error", error.message);
  } else {
    console.log("Written successfully");
  }
});



// read file

readFile("./nameList",(error,content)=>{
     if (error) {
          console.log("Error", error.message);
        } else {
          console.log("read successfully",content.toString());
        }

})

readFile("./nameList", "utf-8",(error,content)=>{
     if (error) {
          console.log("Error", error.message);
        } else {
          console.log("read successfully",content);
        }

})
*/
console.log("start");
const readFilePromise = async () => {
  console.log("inside fun");
 try {
     const content = await fsPromise.readFile("./names.txt");
     console.log("content", content.toString());
 } catch (error) {
     console.log("Error",error);
     
 }
};

readFilePromise();
console.log("end");
