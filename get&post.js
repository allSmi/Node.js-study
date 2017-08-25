var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

// http.createServer(function(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     if (pathname !== '/favicon.ico') {
//         console.log("Request for " + pathname + " received.");

//         response.writeHead(200, { 'Content-Type': 'text/plain' });
//         response.end(util.inspect(url.parse(request.url, true)));
//         console.log('Server running at http://127.0.0.1:8888/');
//     }
// }).listen(8888);

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function(req, res) {
    var body = "";
    req.on('data', function(chunk) {
        body += chunk;
    });
    req.on('end', function() {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });

        if (body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else { // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);