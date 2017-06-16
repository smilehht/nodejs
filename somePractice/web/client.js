var http = require('http');

var options = {
    host: 'localhost',
    port: '8888',
    path: '/index.html'
};

var callback = function(response){

    // 不断更新数据
    var body = '';
    response.on('data', function(data){
        body += data;
    });

    response.on('end', function(){
        console.log('数据接收完毕');
        console.log(body);
    });
}

// 向服务器发送请求
var req = http.request(options, callback);
req.end();