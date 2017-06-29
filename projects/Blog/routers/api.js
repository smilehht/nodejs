/**
*   @file api接口
*   @author huhongtao
*/

'use strict';

var express  = require('express');

var router = express.Router();

// User 对象
var User = require('../models/user.js');

// 返回数据
var responseData = {};

// 设置默认的返回数据
router.use(function(res, req, next) {

    // 默认状态为0，表示无任何问题
    responseData.status = 0;
    // 返回参数说明
    responseData.msg = '';

    // 继续向下执行
    next();
});

router.get('/api', function(req, res, next) {
    res.send('API');
});

router.post('/user/register', function(req, res, next) {
    console.log(req.body);
    var username = req.body.username;
    var passward = req.body.passward;


    if ( username === '') {
        responseData.status = 1;
        responseData.msg = '用户名不能为空';
        res.json(responseData);
        return;
    }

    if ( passward === '') {
        responseData.status = 2;
        responseData.msg = '密码不能为空';
        res.json(responseData);
        return;
    }

    // 验证是否该用户名已经注册
    User.findOne({
        username: username
    }).then(function(userInfo) {
        console.log('userInfo', userInfo);
        // 查到用户
        if (userInfo) {
            responseData.status = 3;
            responseData.msg = '该用户名已注册';
            res.json(responseData);
            return;
        }

        // 保存用户信息到数据库中
        var user = new User({
            username: username,
            passward: passward
        });

        console.log('user', user);

        return user.save();
    }).then(function(newInfo) {

        console.log('newInfo', newInfo);
        // responseData.status = 4;
        responseData.msg = '注册成功';
        res.json(responseData);
        return;
    });

    // res.json(responseData);
});

module.exports = router;