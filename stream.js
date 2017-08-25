// 读
// var fs = require('fs');
// var data = '';

// var readerStream = fs.createReadStream('input.txt');

// readerStream.setEncoding('utf8');

// readerStream.on('data', function(chunk) {
//     data += chunk;
// });

// readerStream.on('end', function() {
//     console.log(data);
//     console.log('执行完毕');
// });

// readerStream.on('error', function(error) {
//     console.log(error);
// });

// 写
// var fs = require('fs');
// var data = 'nodejs111\n222';

// var writerStream = fs.createWriteStream('output.txt');

// writerStream.write(data, 'utf8');

// writerStream.end();

// writerStream.on('finish', function() {
//     console.log('执行完毕');
// });

// writerStream.on('error', function(err) {
//     console.log(err.stack);
// });

// 管道
// var fs = require('fs');

// var readerStream = fs.createReadStream('input.txt');
// var writerStream = fs.createWriteStream('output.txt');
// readerStream.pipe(writerStream);
// console.log('执行完毕');

var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");

// var fs = require("fs");
// var zlib = require('zlib');

// // 解压 input.txt.gz 文件为 input.txt
// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input.txt'));

// console.log("文件解压完成。");
