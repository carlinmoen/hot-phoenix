var http = require('http');
var fs = require('fs');
// This is how to create a server and read an HTML file 
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data)
  {
    fs.writeHead(200, {'Content-Type' : 'text/html'})
    res.write(data);
    res.end():
  });
}).listen(8080);
