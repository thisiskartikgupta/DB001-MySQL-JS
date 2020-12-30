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
var createTableQuery = `CREATE TABLE crudtest (id int(15) NOT NULL AUTO_INCREMENT,name varchar(30) DEFAULT NULL,rollno float(15) DEFAULT NULL,PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1`;

// Passing query
connection.query(createTableQuery, (err) => {
      if(err) throw err;
      else {
        console.log("Table created successfully");
      }
    });

connection.query( "INSERT INTO crudtest(name,rollno) VALUE(?,?)",['kartik',50], (err,rows) => {
  if(err) throw err;
  else {
    console.log(" Added details successfully");
  }
});

// Read Query
connection.query( "SELECT * FROM crudtest", (err,rows) => {
  if(err) throw err;
  else {
    console.log(rows);
  }
});

// Update Query
connection.query( "UPDATE crudtest SET rollno = ? WHERE name=?",[100,'kartik'], (err,rows) => {
  if(err) throw err;
  else {
    console.log(" Updated details successfully");
  }
});

// Delete Query
connection.query( "DELETE FROM crudtest WHERE name=?",['kartik'], (err,rows) => {
  if(err) throw err;
  else {
    console.log(" Delete details successfully");
  }
});

app.listen(5100);


