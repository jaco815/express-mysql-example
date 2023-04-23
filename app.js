const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 4000 
app.use(cors())
const dotenv = require('dotenv').config()
const mysqlConObj = require('./mysql')
const db = mysqlConObj.init()

mysqlConObj.open(db)

app.get('/',function(req,res){
   res.send('Hello')
})

app.get('/board',function(req,res){
   db.query('SELECT * FROM board',function(err,rows){
      if(err)
         console.log(err)
      else
         res.send(rows)
   })
})

app.get('/boards', (req, res) => {   
   db.connect(function(err){
      if(err){
         console.log(err);
      }else{
         console.log('connection Success!!');
      }
   })   
   db.query('SELECT * from board', (err, results) => {
      if (err) 
         console.log(err);
      res.send(results);  
   });
   // connection.end();
});

app.listen(port,function(){
   console.log('Server running..')
})