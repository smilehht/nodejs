var fs = require('fs');

var data = fs.readFileSync('inputStream.txt');

console.log(data.toString());
console.log('阻塞文件');

console.log('以下是非阻塞文件——异步执行');

fs.readFile('inputStream.txt', function(err, data){
    if(err) {
        console.log('error');
        return console.log(err);
    }
    console.log('data:');
    console.log(data);
});

console.log('异步的后面的可能会先执行');