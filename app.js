//require middleware
var express = require('express');
var path  = require('path');
var app = express();
var checkDate = require("./checktime.js");

//Setup the
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "Views"));

app.all("*", (req, res) =>{
  req.next()
})

app.get('/', (req, res) => {
  res.render('index', {title:"timeStamp",message:"Hello, this will be my timestamp"  });
});

app.get('*',(req, res) => {
  console.log(checkDate(req.path.substring(1,req.path.length)));
});

app.listen(12345);
console.log("server listening on port 12345")
