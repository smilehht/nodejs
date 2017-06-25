/**
*   @file home
*   @author huhongtao
*/

'use strict';

var express  = require('express');

var router = express.Router();

router.get('/home', function(req, res) {
    res.render('home/index');
});

module.exports = router;