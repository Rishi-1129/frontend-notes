const http = require('http')
const fs = require('fs')

const html = fs.readFileSync('./Template/index.html', 'utf-8',)

const server = http.createServer((request, response)=>{
    let path = request.url;
   if (path === '/' || path.toLocaleLowerCase()=== '/home'){
    response.writeHead(200,{'Content-type': 'text/html','my-header':'Hello'})
    response.end(html.replace('{{%CONTENT%}}', 'You are in home page'));
// 1st argument: status code, 2nd argument : custom headers
   }
   else if (path.toLocaleLowerCase() === '/about'){
    response.writeHead(200)
    response.end(html.replace('{{%CONTENT%}}', 'You are in about page'));

   }
   else if (path.toLocaleLowerCase() === '/contact'){
    response.writeHead(200)
    response.end(html.replace('{{%CONTENT%}}', 'You are in contact page'));
   }
   else {
    response.writeHead(404)
    response.end(html.replace('{{%CONTENT%}}', 'Error 404 : Not found'));
   }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server has started');
})