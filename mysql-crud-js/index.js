var mysql = require("mysql");
var express = require("express");
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',									
  user     : 'root',
  password : 'password',
  database : 'db_node_crud_test',
  insecureAuth: true,
  multipleStatements : true
});

connection.connect( (err) => {
  if(!err) {
    console.log("Connected Successfully.");
  } else {
    console.log(err);
  }
});

//Create
var createTableQuery = `CREATE TABLE crudtest (id int(15) NOT NULL AUTO_INCREMENT,name varchar(30) DEFAULT NULL,age float(15) DEFAULT NULL,PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1`;

// Passing query
connection.query(createTableQuery, (err) => {
      if(err) throw err;
      else {
        console.log("Table created successfully");
      }
    });

// Display Query
connection.query( "SELECT * FROM crudtest", (err,rows) => {
  if(err) throw err;
  else {
    console.log(rows);
  }
});

app.listen(1337);


