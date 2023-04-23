var express = require('express');
var router = express.Router();
var mysql  = require('mysql'); ; 
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'nodedb'
});

conn.connect();
    
router.get('/list/:page', function(req, res, next) {
  var page = req.params.page;
  var sql = 'SELECT idx,name,title,date_format(regdate,"%Y-%m-%d") regdate,date_format(modidate,"%Y-%m-%d")  modidate ,hit FROM board ORDER BY idx DESC LIMIT ?,10';
  conn.query(sql, function (err, rows) {
    if (err) throw console.log(err);
    res.send(rows);
  
  }
  );

