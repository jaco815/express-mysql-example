const express = require('express');
const router = express.Router();

console.log('router loaded');

router.get('/',(req,res)=>{
   
      res.render('index');
});


module.exports = router;