const express = require('express');
const mysql   = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'student',
});

db.connect(function(err){
    if (err) throw err
    console.log("Mysql is connected looking good!")
});

const API = express();

API.listen(5000);
console.log("your sevrer is now up on port 5000");





















