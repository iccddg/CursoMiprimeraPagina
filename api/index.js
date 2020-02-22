const http = require('http'),fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

var html = fs.readFileSync("./api/index.html");
var  i=0;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write(html);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
