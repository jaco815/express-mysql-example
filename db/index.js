const mysql = require("mysql");

// const password = process.env.DATABASE_SPRINT_PASSWORD;

const host = "localhost";

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

module.exports = connection;