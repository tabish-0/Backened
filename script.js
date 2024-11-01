// Fundamental of JavaScript
// arrays and objects
// function return
// async js coding
// foreach map filter find indexOf


// line by line code chale isey khte hai synchronous
// jo bhi code async nature ka ho, usey side stack mein bhej do and agle code ko chalao jo sync nature ka ho, jab bhi sara sync code chal jaye, tab check karo async code complete hua ya nhi,agar wo complete hua h to usey main stack mein laao and chala do

// async function abcd(){
//     var blob = await fetch(`https://randomuser.me/api/`)   // fetch ko by nature async bana gya hai

//     var ans = await blob.json()

//     // fetch jo answer deta h wo blob hota h, readable form mein nhi hota hai usey json mein convert karte hai phle

//     console.log(ans)
//     // console.log(ans.results[0].name)
// }
// abcd()

// var blob = await fetch(`https://randomuser.me/api/`)
// var res = await blob.json()
// console.log(res)


// function abcd(){
//     return 124;
// }
// var ans = abcd()


// no. of perimeter in function is length
// function abcd(a,b,c){

// }


// objects -> (Key,value) pair
// var obj = {
//     name:"raj",
//     age: 19
// }

// Object.freeze(obj)  // isse freeze ho jata hai and object ke andar value change nahi hoti
// obj.age=35
// obj.name
// obj['name']


// var arr = [1,2,3,4]

// index return karta hai agar array me present h to otherwise -1
// console.log(arr.indexOf(4))


// find karke true false pe kaam karta and value return karta h
// var ans = arr.find((val) => {
//     if(val === 2) return true;
// })
// console.log(ans)


// filter true or false pe kaam karta hai and 
// new array return karta hai according to condition check karke
// var ans = arr.filter((val) => {
//     if(val >= 3){
//         return true;  // true likhne se val store hoga 
//     }
//     else{
//         return false;  // false optional hai kuch return nhi hoga matlab false hai
//     }
// })
// console.log(ans)


// map bhi new array return karke deta hai......
// var newarr = arr.map(function(val){
//     return val*3; 
// })
// console.log(newarr)


// arr.forEach(function(val){
//     console.log(val+" hello")
// })