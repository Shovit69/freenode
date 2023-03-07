const http = require ('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('welcome to your Home')
    }
    else if (req.url==='/about'){
        res.end('something abot us')
    }else{
    res.end(`
    <h1>OOOPs!</h1>
    <a href="/">back home</a>
    `)
    }
})
server.listen(5000)
