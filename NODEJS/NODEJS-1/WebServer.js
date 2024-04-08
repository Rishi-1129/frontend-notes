const http = require('http')
const fs = require('fs')
// create a server
const html =fs.readFileSync('./Template/index.html','utf-8')
const server = http.createServer((request, response)=>{
response.end(html)
console.log('A new request received');
// console.log(response)
});


//start the server
// parameter port, hostname, 
server.listen(8000,'127.0.0.1',()=>{
    console.log('server started');
})

