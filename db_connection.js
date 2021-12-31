const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ammananna",
  database:"sample",
  multipleStatements: true
});

con.connect(function(err) {
  if (!err)
  console.log("Connected!");
  else
  console.log(err)
});

