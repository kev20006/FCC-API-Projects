var express = require('express');
var router = express.Router();
var checkDate = require("../checkDate.js");

router.get('/', function(req, res, next) {
  res.render('dates', { title: 'API date Service' });
});

router.get('*',(req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(checkDate(req.path.substring(1,req.path.length))));
});


module.exports = router;
