const express = require('express')
const app = express();

app.use(function(req, res, next){
    console.log("Chal gya middleware")
    next()
})

app.use(function(req, res, next){
    console.log("phir se Chal gya middleware")
    next()
})

app.get("/", function(req,res){
    res.send("champion ho yaar tum")
})

app.get("/about", function(req,res){
    res.send("ye about page hai")
})

// app.get("/profile", function(req,res,next){
//     return next(new Error("Something went wrong"))   // ye console par jayega
// })

app.get("/profile", function(req,res,next){
    // res.send("done") 
    return next(new Error("Not Implemented"))
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something went wrong, we don't have any idea")  // ye response hai frontend par jayega
})

// app.get("/profile", function(req,res){
//     res.send("Kya bol rhe ho bolo")
// })

app.listen(3000)