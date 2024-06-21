const isLogedin = (req, res, next) => {
  console.log("this is login validation");
  //   res.send("this is from logedin ")
  next();
};

const isValidUser = (req, res, next) => {
  console.log("this is user validation");
//   res.send("this is from user validation ");
  next();
};
module.exports = { isLogedin, isValidUser };
