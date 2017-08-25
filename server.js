var http = require('http');
var url = require('url');

function start(route) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        if (pathname !== '/favicon.ico') {
            console.log("Request for " + pathname + " received.");
            route(pathname);

            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Hello World\n');
            // response.write("Hello World");
            // response.end();
            console.log('Server running at http://127.0.0.1:8888/');
        }
    }).listen(8888);
}
console.log('Server running at http://127.0.0.1:8888/');
exports.start = start;
