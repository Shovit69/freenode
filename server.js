const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event');
    res.end('hey there')
})
server.listen(5000,()=>{
    console.log('listenong on port 5000');
})