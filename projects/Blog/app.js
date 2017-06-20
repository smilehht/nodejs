/**
*   @file 程序的入口文件
*   @author huhongtao
*/

// 加载express
var express = require('express');

// 创建app应用
var app = express();


app.get('/', function (req, res, next) {
    res.send('<h1>欢迎光临我的博客！</h1>');
});


// 监听请求
app.listen(8081);
