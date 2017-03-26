var express = require('express');
var app = express();

var fs = require('fs');
var _ = require('lodash');

var port = 5000;
var users = [];

fs.readFile('user.json', {encoding: 'utf8'}, function(err, data){
    if(err)
        throw err;
    JSON.parse(data).forEach(function(user){
        user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
        users.push(user);
    })
})

app.get('/', function(req, res){
    var buffer =' ';
    users.forEach(function(user){
        //buffer += user.name.full + '<br>';
        buffer += '<a href="/' + user.username + '">' + user.name.full + '</a><br>'
    });
    res.send(buffer);
});

app.get(/crazy.*/, function(req, res, next){
    console.log('CRAZY USER ACCESS');
    next();
})

app.get('/:username', function(req, res){
    var username = req.params.username;
    res.send("Hello " + username);
})

app.get('/home', function(req,res){
    res.send('home page');
})

var server = app.listen(port, function(err){
    console.log('Server running on port ' + port);
});