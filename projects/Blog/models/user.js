/**
*   @file 用户类
*   @author huhongtao
*/

var mongoose = require('mongoose');
var UserSchema = require('./schema/users.js');

var userModel = mongoose.model('User', usersSchema);

module.exports = userModel;