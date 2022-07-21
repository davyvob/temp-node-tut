const http = require('http');

const server = http.createServer((req , res) => {
  if(req.url === '/')
  res.end('HOme');
  if(req.url ==='/about')
  res.end('aboutttt');
  else
  res.end('404') 
})

server.listen(5000)