const http = require('http')

const server = http.createServer()

server.on('request',(req, res)=>{
    res.end('hello fvsthere')
})

server.listen(5500)