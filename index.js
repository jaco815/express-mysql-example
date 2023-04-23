const express    = require('express');
const mysql      = require('mysql');
// const db 		 = require("./db/index.js");

const app = express();

app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
   res.send('Root');
});

app.get('/db', (req, res) => {

   let connection = mysql.createConnection({
      host     : 'localhost', //실제로 연결할 데이터베이스의 위치
      port     : '3306',
      user     : 'root',
      password : '1234',
      database : 'nodedb' //데이터베이스 이름
   });

   connection.connect(function(err){
      if(err){
         console.log(err);
      }else{
         console.log('connection Success!!');
         // res.send('connection Success!!');
      }
   })

   // connection.query('SELECT * FROM board',function(err,rows){
   //    if(err)
   //       console.log(err)
   //    else
   //       console.log(rows)
   // })
   var x = 1 ; 
   var sql = 'SELECT * FROM BOARD WHERE idx = ?';
   connection.query(sql ,[1], (err, rows) => {
      if (err) 
         console.log(err);     
      console.log(rows);
      // res.send(results);  
   });
   
   var sql2 = 'INSERT INTO board ( name , title , content, regdate , modidate) VALUES (?, ?, ? ,?,?)';
   connection.query(sql2 ,['djaco', 'title2', 'content2', '2021-06-01', '2021-06-01'   ], (err, rows) => {
      if (err) 
         console.log(err);     
      console.log(rows);
      // res.send(results);  
   });
   
   
   
   if(err)
         console.log(err)
      else
         console.log(rows)
   


   res.send('db success')
   
   // connection.query('INSERT INTO board (title, content) VALUES ("test", "test")', function(err, rows){
   //    if(err)
   //       console.log(err)
   //    else
   //       console.log(rows)
   // }
   
   connection.end();
});

app.listen(app.get('port'), () => {
   console.log('Express server listening on port ' + app.get('port'));
});