const express    = require('express');
const mysql      = require('mysql');
// const db 		 = require("./db/index.js");

const app = express();

app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
   res.send('Root');
});

app.get('/users', (req, res) => {

   let connection = mysql.createConnection({
      host     : 'localhost', //실제로 연결할 데이터베이스의 위치
      port     : '3306',
      user     : 'root',
      password : '1234',
      database : 'my_db' //데이터베이스 이름
   });

   connection.connect(function(err){
      if(err){
         console.log(err);
      }else{
         console.log('connection Success!!');
      }
   })
   
   connection.query('SELECT * from users', (err, results) => {
      if (err) 
         console.log(err);
      res.send(results);  
   });

   connection.end();
});

app.listen(app.get('port'), () => {
   console.log('Express server listening on port ' + app.get('port'));
});