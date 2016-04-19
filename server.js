var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello from mihich v0.4.3 release");
}
var www = http.createServer(handleRequest);
www.listen(8080);