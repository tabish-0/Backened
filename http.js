const http = require('http')

const server = http.createServer(function(req, res){
    res.end("hello dear")
})
server.listen(3000);