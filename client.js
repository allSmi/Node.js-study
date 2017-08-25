var http = require('http');

// 用于请求的选项
var options = {
    host: 'www.jianshu.com', // host不需要加http
    port: '80',
    path: '/p/4531a29e8d7a'
};

// 处理响应的回调函数
var callback = function(response) {
    // 不断更新数据
    var body = '';
    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        // 数据接收完成
        console.log(body);
    });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();
