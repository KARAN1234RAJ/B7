const fs = require("fs");
/* directory 
 madir
 Async
 sync

 */
// create

//  fs.mkdir('./newFolder',(err)=>{
//      if(err){
//           console.error("err",err.message);
//      }else{
//           console.log("folder created success");
//      }
//  })

// read  directory

//  fs.readdir('./newFolder',(err, dirs)=>{
//      if(err){
//           console.error("err",err.message);
//      }else{
//           console.log("Directories are", dirs);
//      }

//  })

// remove dir

fs.rmdir("./newFolder", { recursive: true }, (err) => {
  if (err) {
    console.error("err", err.message);
  } else {
    console.log("Directories deleted");
  }
});
