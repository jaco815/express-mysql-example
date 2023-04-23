const express    = require('express');
const mysql      = require('mysql');
// const db 		 = require("./db/index.js");

const app = express();

app.set('port', process.env.PORT || 4000);



var formRouter = require('./routes/form');
app.use('/form',  formRouter);

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


   var x = 1 ; 
   var sql = 'SELECT * FROM BOARD WHERE idx = ?';
   connection.query(sql ,[1], (err, rows) => {
      if (err) 
         console.log(err);     
      console.log(rows);

   });
   

   
   if(err)
         console.log(err)
      else
         console.log(rows)
   


   res.send('db success')
   
      
   connection.end();
});

app.use((req, res, next) => {
   res.status(404).send('Sorry cant find that!');
})

app.listen(app.get('port'), () => {
   console.log('Express server listening on port ' + app.get('port'));
});