const express = require('express')
const app = express()
const port = 4000 

const mysqlConObj = require('./mysql')
const db = mysqlConObj.init()

// mysqlConObj.open(db)

app.set('view engine','ejs')

app.get('/',function(req,res){
   res.send('Hello')
})


app.get('/board/write',function(req,res){
   res.render('write')
})

app.post('/board/write',function(req,res){
   db.query('INSERT INTO board (title, content) VALUES (?,?)',[req.body.title,req.body.content],function(err,rows){
      if(err)
         console.log(err)
      else
         res.send('success')
   })
})

app.put('/board/update',function(req,res){
   db.query('UPDATE board SET title=?, content=? WHERE id=?',[req.body.title,req.body.content,req.body.id],function(err,rows){
      if(err)
         console.log(err)
      else
         res.send('success')
   })
})

app.delete('/board/delete',function(req,res){
   db.query('DELETE FROM board WHERE id=?',[req.body.id],function(err,rows){
      if(err)
         console.log(err)
      else
         res.send('success')
   })
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
   console.log('server listening.....')
})