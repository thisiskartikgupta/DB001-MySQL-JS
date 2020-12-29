var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//app.use(bodyParser.json())

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

// app.get("/", (req,res) => {
//   connection.query("SELECT * FROM db_node_crud_test", (err, rows, fields) => {

//     if(!error) {
//       console.log("Error in query : "+err);
//     } else {
//       console.log("Query Passed Successfully");
//     }
//   });
// });

app.listen(1337);


