//require middleware
var express = require('express');
var path  = require('path');
var app = express();
var dates = require('./routes/dates');
var port = process.env.PORT || 8080;

//Setup the
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "Views"));
app.use('/dates', dates);


app.get('/', (req, res) => {
  res.render('index', {title:"Kevin's API Services" });
});


app.listen(port);
console.log("server listening on port: " & port)
