const http = require('http'),fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

var html = fs.readFileSync("./api/index.html");
var  i=0;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  for(i=1; i<=3; i=i++)
{
  res.write(html);
};
  //res.write(html);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
