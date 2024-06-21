const app = require("./app");
const dotEnv = require("dotenv");
dotEnv.config();
// console.log("=======",process.env);
const PORT = process.env.PORT;
// const PORT = 5000;
app.listen(PORT, () => {
  console.log(`my server is running on port ${PORT}`);
  [];
});
