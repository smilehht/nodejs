/**
*   @file home
*   @author huhongtao
*/

'use strict';

var express  = require('express');

var router = express.Router();

router.get('/index', function(req, res) {
    res.render('home/index');
});
router.get('/register', function(req, res) {
    res.render('register/index');
    // console.log('222');
});

module.exports = router;