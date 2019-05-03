
var express = require('express');
var app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 5000;
app.set('view engine', 'ejs');
const pg = require('pg');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/',function(req,res){
    res.send('ffffffffffffffff')
})
app.listen(PORT, function () {
    console.log('Server Started')
})