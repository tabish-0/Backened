Express.js Framework:

Introduction to Express.js

express js ek npm package hai.  
FrameWork.  
manages everything from receiving the request and giving the response.

Setting up a basic Express application && Routing  
npm i exress -> installation

route create karte hai end wala / hi route h, domain ke baad wala / and uske baad wala  

facebook.com/  
X.com/  
youtube.com/

sheryins.com/profile -> /profile hi route hai  

app.get("route", requestHandler)  
app.listen(port)  

Server khud se restart nahi hota hai hamein start karna hota hai and if we change our code to phir se start karna hoga server and isse bachne ke liye we would have to install package - (npm i nodemon -g) isse ham kabhi bhi apna server nodemon se chala sakte hai  


MiddleWare -->  
jab bhi server request karta hai waha se route ke beech pahuchne tak agar aap us request ko beech mein rokte ho and kuch perform karte ho, to ye element middleWare kahlata hai  

app.use() -> app.get() se pahle likhege isse ye hoga jitni bhi request ayengi ye server pe usse pahle ye chalega  
app.use(function(req, res, next))  

jab saara kam ho jayega uske baad next() likhege jisse forward ho jaye  



Error handling -->  sabse last mein likhte hain  
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})