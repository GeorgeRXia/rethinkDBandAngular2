var express = require('express');
var router = express.Router();



router.use('/',require('./home'));
router.use('/goallist',require('./goallist'));

module.exports = router;
