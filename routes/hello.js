const express = require('express');
const router = express.Router();

/* GET users listing. */
// noinspection JSUnresolvedFunction,JSUnusedLocalSymbols
router.get('/world/', function (req, res, next) {
    res.send('hello world!');
});

module.exports = router;
