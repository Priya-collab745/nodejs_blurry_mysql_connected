const http = require("http");
const path = require("path");
const fs = require("fs");

const mysql = require('mysql2');
const events = require('events');
const { connect } = require("http2");
const EventEmitter = require('events')
var emitter= new EventEmitter()
const express=require('express')
const app=express()

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       res.end(content);
  //     }
  //   );
  // }

  // if (req.url === '/2') {
  //   // const users = [
  //   //   { name: 'Bob Smith', age: 40 },
  //   //   { name: 'John Doe', age: 30 }
  //   // ];
  //   // res.writeHead(200, { 'Content-Type': 'application/json' });
  //   // res.end(JSON.stringify(users));
  // }

  // Build file path
  let filePath = path.join(
    __dirname,
    ".",
    req.url === "/" ? "index.html" : req.url
    
  );

  // Extension of file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  // log the filePath
  console.log(filePath);

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //  Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});


// Database Connection

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ammananna",
  database:"sample",
  // multipleStatements: true
});

con.connect(function(err) {
  if (!err)
  console.log("Connected!");
  else
  console.log(err)

  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });
  var sql = "select * from image where id=1;"
  con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
});

// document.getElementById(".node").addEventListener("click", function() {
//   alert("Hello World!");
// });

function callMajorNode(){
  //alert("redirecting to Node JS!");
  console.log(con)
  var sql = "select * from image where id=1;"
  con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  //console.log(result['url']);
}


const PORT = process.env.PORT || 5002;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


