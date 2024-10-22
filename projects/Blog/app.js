/*
*   @file 程序的入口文件
*   @author huhongtao
*/

'use strict';

// 加载express
var express = require('express');
// 加载模板处理模块
var swig = require('swig');

// 创建app应用
var app = express();
// 静态文件的配置
// 当用户访问的url以public开始，直接返回__dirname + ‘/public’下的文件
app.use('/public', express.static(__dirname + '/public'));

// 加载mongoose数据库
var mongoose = require('mongoose');
// 加载body-parse
var bodyParse = require('body-parser');
// 加载Cookie模块
var Cookie = require('cookies');

// 加载User
var User = require('./models/user.js');

// 配置当前模板
// 定义当前使用的模板引擎
app.engine('html', swig.renderFile);
// 设置模板文件存放的目录，第一个必须是views，第二个参数是目录
app.set('views', './resource');

// 注册所使用的模板引擎，第一个参数必须是'view engine'，第二个参数和app.engine的第一个参数相同
app.set('view engine', 'html');

// 取消缓存
swig.setDefaults({cache: false});

// 加载body-parser中间件
app.use(bodyParse.urlencoded({extended: true}));

// 设置cookie
app.use(function(req, res, next) {
    req.cookies = new Cookie(req, res);


    // 如果有Cookie信息,将cookie放到useInfo中
    req.userInfo = {};
    if (req.cookies.get('userInfo')) {
        try {
            req.userInfo = JSON.parse(req.cookies.get('userInfo'));
            // 获取当前登录的用户是否为管理员
            // console.log('req.userInfo._id', req.userInfo._id);
            User.findById(req.userInfo._id).then(function(userInfo) {
                console.log('userinfo', userInfo);
                req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
                console.log('req.userInfo.isAdmin', req.userInfo.isAdmin);
                console.log('userinfo', userInfo);
                // next();
            });
        } catch (e) {
            console.log('cookie 解析错误');
            // next();
        }
    }
    // console.log('cookie1',req.cookies.get('userInfo'));
    next();
});


// 根据不同功能划分模块
app.use('/', require('./routers/home'));
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));

// 链接数据库
mongoose.connect('mongodb://localhost:27017/blog', function(err) {
    if (err) {
        console.log('数据库启动失败');
    } else {
        console.log('数据库启动成功');

        // 监听请求
        app.listen(8080);
    }
});

