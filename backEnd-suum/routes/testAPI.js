var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Suum API is working properly- Wanda Vision is amazing');
});

module.exports = router;