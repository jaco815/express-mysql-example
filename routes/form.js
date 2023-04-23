var express = require('express');
var router = express.Router();

console.log('form router')

router.get('/', function(req, res, next) {
      res.render('form', 
      { 
            name: 'HS Noh',
            blog : 'djaco',
            homepage : 'jacohome'
      }      
      );
});

module.exports = router;