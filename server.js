var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello from mihich v4.0 release");
}
var www = http.createServer(handleRequest);
www.listen(8080);