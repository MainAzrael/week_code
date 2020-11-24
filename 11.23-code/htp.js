const http = require('http')
const server = http.createServer()

server.on('request',(req,res) => {
    console.log('123');
})

server.listen(8080,() => {
    console.log('server is running');
})