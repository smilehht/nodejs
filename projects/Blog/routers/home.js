/**
*   @file home
*   @author huhongtao
*/

'use strict';

var express  = require('express');

var router = express.Router();

router.get('/index', function(req, res) {
    res.render('js/home/index');
});
router.get('/register', function(req, res) {
    res.render('js/register');
});
router.get('/login', function(req, res) {
    // console.log({userInfo: req.userInfo});
    res.render('js/login', {userInfo: req.userInfo});
});

module.exports = router;