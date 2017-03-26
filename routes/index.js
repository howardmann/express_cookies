var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('banana', 'HAHAHA');
  res.render('index', { 
    title: 'Express',
    cookies: req.cookies,
    url: encodeURIComponent('#/library/import/template_b12e0888962b4201b844e669fdd36aba/шеллы'),
    decodeUrl: decodeURIComponent('%23%2Flibrary%2Fimport%2Ftemplate_b12e0888962b4201b844e669fdd36aba%2F%D1%88%D0%B5%D0%BB%D0%BB%D1%8B')
  });
});

module.exports = router;
