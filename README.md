# nodemailer-sendcloud-transport
#### caution: only support text/html right now.
This module is a transport plugin for [SendCloud](http://sendcloud.sohu.com/) that makes it possible to send through [SendCloud's Web API](http://sendcloud.sohu.com/api-doc/doc-index)!

## Usage
Install via npm.

    npm install nodemailer-sendcloud-transport

Require the module and initialize it with your SendGrid credentials.

```javascript
var nodemailer = require('nodemailer');
var scTransport = require('nodemailer-sendcloud-transport');

var options = {
    auth: {
        api_user: 'SENDGRID_USERNAME',
        api_key: 'SENDGRID_PASSWORD'
    }
}
    
var mailer = nodemailer.createTransport(scTransport(options));
```

Note: We suggest storing your SendCloud username and password as enviroment variables.

Create an email and send it off!

```javascript
var email = {
    to: ['joe@foo.com', 'mike@bar.com'],
    from: 'roger@tacos.com',
    subject: 'Hi there',
    text: 'Awesome sauce',
    html: '<b>Awesome sauce</b>'
};

mailer.sendMail(email, function(err, res) {
    if (err) { 
        console.log(err) 
    }
    console.log(res);
});
```
## License
Licensed under the MIT License.

