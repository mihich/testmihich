var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello from mihich v3");
}
var www = http.createServer(handleRequest);
www.listen(8080);