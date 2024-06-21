const express = require("express");
const app = express();
const {islogedin, isValiedUser} = require('./middleware')

const productRouter = require('./routes/productRoutes')
app.use(isValiedUser)
app.use(islogedin)
app.use('/product',productRouter)
app.get('/',(req,res)=>{
     console.log("Hello World");
     res.send("This is Home Page");
})

module.exports = app;
