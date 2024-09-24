const express=require("express")
const cookie=require("cookie-parser")
const connect = require("./config/db")
const URoute = require("./routes/user.Route")
const LRoute = require("./routes/library.routes")
require("dotenv").config()
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookie())

app.use("/user",URoute)
app.use("/book",LRoute)

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong" } = err;
    console.log(message);
    res.status(statusCode).json(message);
  });
app.listen(process.env.PORT,()=>{
    console.log(`Server start ${process.env.PORT}`)
    connect()
})