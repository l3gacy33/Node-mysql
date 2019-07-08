const express = require('express');
const mysql   = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'student',
  database : 'blog'
});

db.connect(function(err){
    if (err) throw err
    console.log("Mysql is connected looking good!")
});

const API = express();

// creating db
API.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE blog'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created ... ');
    });
});

// create a table
API.get("/createposttable", (req, res) => {
    // create table called posts
    // have an id
    // Auto increment
    // title
    // body
    // primary key will be id
    let sql = 'CREATE TABLE posts(ID int NOT NULL AUTO_INCREMENT, title varchar(255), body varchar(255),PRIMARY KEY (ID) );'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Table was created')
    });
})





API.listen(5000);
console.log("your sevrer is now up on port 5000");


