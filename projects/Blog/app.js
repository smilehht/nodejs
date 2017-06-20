/**
*   @file 程序的入口文件
*   @author huhongtao
*/

// 加载express
var express = require('express');
// 加载模板处理模块
var swig = require('swig');

// 创建app应用
var app = express();
// 静态文件的配置
// 当用户访问的url以public开始，直接返回__dirname + ‘/public’下的文件
app.use('/public', express.static(__dirname + '/public'));

// 配置当前模板
// 定义当前使用的模板引擎
app.engine('html', swig.renderFile);
// 设置模板文件存放的目录，第一个必须是views，第二个参数是目录
app.set('views', './views');

// 注册所使用的模板引擎，第一个参数必须是'view engine'，第二个参数和app.engine的第一个参数相同
app.set('view engine', 'html');

// 取消缓存
swig.setDefaults({cache: false});

// 设置路由
app.get('/', function (req, res, next) {

    // 读取指定的文件，解析返回给客户端
    res.render('index');
});



// 监听请求
app.listen(8080);
