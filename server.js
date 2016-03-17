var express= require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var i=0;
var spawn = require('child_process').spawn,
    tail  = spawn('./test');

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

app.set('view engine','jade');
app.use(express.static(__dirname));

app.get('/', function(req,res){
		res.render('index');
		});

io.on('connection', function (socket) {
  console.log('a user is connected');
  socket.on('disconnect', function(){
    console.log('a user is disconnected');
  });
  tail.stdout.setEncoding('utf-8');
  tail.stdout.on('data', function(data){
    socket.emit('news', data);
    console.log(data);
  });
});


server.listen(3000);
