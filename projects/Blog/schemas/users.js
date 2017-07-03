/**
*   @file 用户表结构
*   @author huhongtao
*/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Users = new Schema({
    // 用户名
    username: String,
    // 密码
    passward: String,
    // 是否是管理员
    isAdmin: {
        type: Boolean,
        default: false
    }
});

module.exports = Users;