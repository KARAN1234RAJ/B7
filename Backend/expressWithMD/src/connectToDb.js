const mongoose = require("mongoose");
// make the connection with cloud database
console.log("Inside connect db file");
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Database connected success !");
  })
  .catch((err) => {
    console.log(`error: ${err.message}`);
  });
