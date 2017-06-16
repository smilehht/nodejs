var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){

    // 解析请求
    var pathname = url.parse(request.url).pathname;

    console.log('请求的路径：' + pathname);

    fs.readFile(pathname.substr(1), function(err, data){
        
        if (err) {

            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});

        } else {
            // HTTP 状态码：200
            response.writeHead(200, {'Content-Type': 'text-html'});

            // 响应内容
            response.write(data.toString());
        }

        response.end();
    });
}).listen(8888);

console.log('服务器启动啦！');