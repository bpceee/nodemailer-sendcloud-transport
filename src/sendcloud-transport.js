'use strict';

var https = require('https');
var qs =require('querystring');
var url = require('url');

module.exports = function(options) {
  return new SendCloudTransport(options);
};

function SendCloudTransport(options) {
  options = options || {};

  this.options = options;
  this.name = 'SendCloud';
}

SendCloudTransport.prototype.send = function(mail, callback) {
  var email = mail.data;

  email.api_key = this.options.auth.api_key;
  email.api_user = this.options.auth.api_user;

  var content= qs.stringify(email);
  var options={
    host : 'sendcloud.sohu.com',
    port : 443,
    path : '/webapi/mail.send.json',
    method:'POST',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
      'Content-Length':content.length
    }
  };

  var req = https.request(options,function(res){
    var _data = '';
    res.on('data', function(chunk){
      _data += chunk;
    });

    res.on('end', function(){
      callback(undefined,_data);
    });
  });

  req.on('error', function(e) {
    callback(e);

  });

  req.write(content);
  req.end();
};