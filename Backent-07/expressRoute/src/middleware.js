const islogedin = (req, res, next) => {
  console.log("This valid login");
//   res.send("userId or password incorrect");
next()
};
     
const isValiedUser = (req, res, next) => {
  console.log("This valid user");
//   res.send("not valid user");
  next()
};

module.exports ={islogedin, isValiedUser}
