/**
*   @file api接口
*   @author huhongtao
*/

var express  = require('express');

var router = express.Router();

router.get('/api', function(req, res, next) {
    res.send('API');
});

module.exports = router;