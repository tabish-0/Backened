// from handling and working with the forms 
// handle backened process of forms and making sure the data coming from any frontend library, frameWork, templating engines we still handle it at the backend

// npm i cookie-parser --> install it 

// session cookie

// ham log kuch bhi data frontend par browser par rakh sakte hai and jab bhi aap kuch bhi request backened par karoge wo frontend par saved data automatically backend par chala jayega

// jo frontend par ham likhte hai wo cookie hai and jo ham server se connected hai cookie ke basis par ye jo complete cheez hai wo hai session

// cookie wo data h jo frontend ya browser par save rhta hai

// login se logout ta ka safar hi session hota hai


// exmaple --> server aapko nahi janta aap login karte hai and server aapko string deta h jo frontened par rahta cookie bolte hai and jab aap kuch karte ho wo cookie bhi jaati jisse server aapko pehchan sake and uss basis par response de sake agar wo cookie nahi rahega to aapko baar baar login karna padega and cookie ke basis pe aap connected rahte ho serever se iss complete process ko session kahte hai



// tumne to bheja tha plain text and server ko mila blob which is not directly readable ab is cheez ko hadle karna padega ki hum us blob ko wapas se readable kar sake

// example --> agar koi framework use kar rhe to uss ke liye data json form mein bhejege and jab ham EJS wagaira use kar rhe honge and ye chahte hai ki from hi submit ho tab urlencoded use karte hai





const express = require('express')
const app = express();

app.use(express.json())    // iss dono line se hi convert hota hai blob to readable form
app.use(express.urlencoded({extended : true}))

app.get("/", function(req,res){
    res.send("champion ho yaar tum")
})

app.get("/about", function(req,res){
    res.send("ye about page hai")
})

app.get("/profile", function(req,res,next){
    return next(new Error("Not Implemented"))
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something went wrong, we don't have any idea") 
})

app.listen(3000)