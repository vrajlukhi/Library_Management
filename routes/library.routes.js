const {Router}=require("express")
const Auth = require("../middleware/auth")
const { allBook, userBook, singleBook, addBook, updateBook, deleteBook, borrow, Return } = require("../controllers/library.controller")
const LRoute=Router()

LRoute.get("/allBook",Auth,allBook)
LRoute.get("/userBook",Auth,userBook)
LRoute.get("/singleBook/:id",Auth,singleBook)
LRoute.post("/addBook",Auth,addBook)
LRoute.patch("/updateBook/:id",Auth,updateBook)
LRoute.delete("/deleteBook/:id",Auth,deleteBook)
LRoute.post("/:id/borrow",Auth,borrow)
LRoute.post("/:id/return",Auth,Return)

module.exports=LRoute