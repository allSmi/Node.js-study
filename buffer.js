var buf = new Buffer(10);
len = buf.write('hahahah');
console.log('写入：' + len);

console.log(buf.toString('utf8', 0, 5));
console.log(buf.toJSON(buf));

var buf1 = new Buffer('www.steel.com');
var buf2 = Buffer.concat([buf, buf1], 30);
console.log(buf2.toString('utf8'));

var result = buf.compare(buf1);
console.log(result);

var buf3 = new Buffer(3);
buf.copy(buf3, 0, 1);
console.log(buf3.toString());

console.log(buf.slice(0, 2).toString());

var buf4 = new Buffer([1, 2, 3, 4]);
console.log(buf4.toJSON());

var buf5 = new Buffer(10);
buf5.fill('h');
console.log(buf5.toString());
