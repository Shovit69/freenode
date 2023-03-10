const http = require('http')
const {readFileSync, createReadStream}= require('fs')

const server = http.createServer((req,res)=>{
    // const text= readFileSync('./content/big.txt','utf8')
    // res.end(text)
    const fileStream = createReadStream('./content/big.txt','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
})
server.listen(5500,()=>{
    console.log('listenong on port 5500');
})


// const http = require('http')
// const {readFileSync}= require('fs')

// const server = http.createServer((req,res)=>{
//     const text= readFileSync('./content/big.txt','utf8')
//     res.end(text)
// })
// server.listen(5500,()=>{
//     console.log('listenong on port 5500');
// })