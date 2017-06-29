/**
*   @file 用户类
*   @author huhongtao
*/

var mongoose = require('mongoose');
var UserSchema = require('../schemas/users.js');

var userModel = mongoose.model('User', UserSchema);

module.exports = userModel;