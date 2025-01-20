const http = require("http");
const server = http.createServer((request, response)=>{
    response.writeHead(200, {'content-type': 'text/plain'});
    response.end('Hello');
});

server.listen(4000, ()=>{
    console.log('Server stared successfully on PORT 4000');
    
})