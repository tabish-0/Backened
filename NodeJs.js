const fs = require('node:fs');

// fs.writeFile("hey.txt", "hello kaise ho,", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.appendFile("hey.txt", " main to acchu hu, tum batao", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done")
// })

// fs.copyFile("hello.txt", "./copy/chacha.txt", function(err){
//     if(err) console.error(err.message);
//     else console.log("done")
// })

// fs.unlink("hello.txt", function(err){
//     if(err) console.error(err)
//     else console.log("removed");
        
// })

fs.rm("./copy", {recursive: true}, function(err){  // instead of rmdir we use rm
    if(err) console.error(err)
    else console.log("removed")
})