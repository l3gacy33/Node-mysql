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

// inserts a post into posts table
API.get("/addpost", (req, res) => {
    let post = {title: "My first post", body: "hello today was an interesting day"}
    let sql ='INSERT INTO posts SET ?';
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('first post added ..')
    });
})

// adding second post
API.get("/secondpost", (req, res) => {
    let post = {title: "My second post", body: "well the food for today was different from the other times"}
    let sql ='INSERT INTO posts SET ?';
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('second post added ..')
    });
})

// adding a third post
API.get("/thirdpost", (req, res) => {
    let post = {title: "My third post", body: "today's lesson was easy and reall quick to understand"}
    let sql ='INSERT INTO posts SET ?';
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('third post added ..')
    });
})




// select all post
API.get("/getpost", (req, res) => {
    let sql ='SELECT * FROM posts';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
})


// select a single post
API.get("/getpost/:id", (req, res) => {
    let sql ='SELECT * FROM posts WHERE ID =' + req.params.id;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
})


// delete a post
API.get("/deletepost/:id", (req, res) => {
    let sql ='DELETE FROM posts WHERE ID =' + req.params.id;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
})




API.listen(5000);
console.log("your sevrer is now up on port 5000");


