const express = require('express');
const router = express.Router();

/* GET home page. */
// noinspection JSUnresolvedFunction,JSUnusedLocalSymbols
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
