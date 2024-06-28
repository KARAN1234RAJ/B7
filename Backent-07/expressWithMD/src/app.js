const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();
const productRouter = require('./routes/productRoute')
require('./connectionToDB')
const app = express();
console.log("inside appp");
app.use(express.json());
app.use('/product',productRouter)

// app.get('/',(req,res)=>{
//      res.send("This is Home Page!")
// })

module.exports = app;
