const mongoose = require("mongoose");
console.log("Inside DB");
// make the connection with cloud DB
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((Error) => {
    console.log(`Error ${Error.message}`);
  });
