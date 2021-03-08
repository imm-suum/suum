var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly- Wanada Vision is amazing');
});

module.exports = router;