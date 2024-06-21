const dotEnv = require("dotenv");
const app = require("./app");

dotEnv.config();
// console.log("===", process.env.PORT);
const { PORT } = process.env;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`My server is running on port No:${PORT}`);
});
