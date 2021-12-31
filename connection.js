
const mysql = require('mysql2');
const http = require("http");
const path = require("path");
const fs = require("fs");
const { connect } = require("http2");
// Database Connection

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ammananna",
    database:"sample",
    multipleStatements: true
  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


module.exports= con


`
//////////////////////////  SCRIPT FUNCTIONS /////////////////////////////////////////////
//var document= new JSDOM.window.document;

let loadText = new JSDOM("index.html").window.document.getElementById('loading-text')
let bg = new JSDOM("index.html").window.document.getElementsByClassName('bg')
//new JSDOM("index.html").window.document.getElementById('.loading-text-head')
let loadTextHead= new JSDOM("index.html").window.document.getElementsByClassName('loading-text-head')
let loadButton= new JSDOM("index.html").window.document.getElementsByClassName('btn-group')
//import {callMajorNode} from "./index.js"
let load = 0
let loadstr='.'
let loadheadstr=''
let int = setInterval(blurring, 60)

function blurring() {
    load++
    loadstr=loadstr+'.'
    if (load%3==2){
        loadstr='.'
        
    }
    if(load<10){
        loadheadstr='loading';
        
        
    }
    if(load>10 && load < 30){
        loadheadstr='Comingsoon';
        
        

    }
    if(load>30 && load < 99){
        loadheadstr='Hurrah!!';
        
        
    }
    

    if (load >=99 ) {
        clearInterval(int);
        loadheadstr='';
        
    }
    /*console.log('SCALE VALUE--->>>', scale(load, 0, 100, 1, 0))*/
    //console.log(loadstr)
    console.log(loadText)
    loadText.textContent = loadstr

    // loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // bg.style.filter = `//blur(${scale(load, 0, 100, 60, 0)}px)`
    // loadButton.style.filter=`blur(${scale(load, 0, 100, 60, 0)}px)`
    // loadTextHead.innerText=`${loadheadstr}`

    
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
// }

// // module.exports = callMajorNode()

// app.get('/2',(req,res) =>{
//   var sql = "select * from image where id=2;"
//   con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
// })


// function callNode(){
//     //alert("redirecting to Node JS!");
//     callMajorNode()
//     //console.log(result['url']);
//   }

// document.getElementById(".node").addEventListener("click", function() {
//     alert("Hello World!");
//   });


// emitter.on('callNode()',function(){
//     alert("redirecting to Node JS!");
// })
// emitter.emit('callNode()')


// const element = document.querySelector('.node')
// // always checking if the element is clicked, if so, do alert('hello')
// element.addEventListener("click", () => {
//     alert('redirecting to Node js');
// }) */`