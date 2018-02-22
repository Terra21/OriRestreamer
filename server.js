var express = require('express');
var app = express();
var fs = require('fs');
var server = require('http').createServer(app);

var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

// app.use(express.static(__dirname + '/node_modules'));
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.get('/', function(req, res,next) {
    //res.sendFile(__dirname + '/index.html');
});

function writeToFile(matches){
    fs.writeFile('matches.json', JSON.stringify(matches), function(err) {
        if(err) return console.log(err);
    });
}

io.on('connection', function(client) {
    client.on('data', function(data){
        io.emit('data', data);
    });

    client.on('tracker', function(data){
        io.emit('tracker', data);
    });

    client.on('timer', function(start, data){
        io.emit('timer', start, data);
    });

    client.on('timer1', function(finished, data){
        io.emit('timer1', finished, data);
    });

    client.on('timer2', function(finished, data){
        io.emit('timer2', finished, data);
    });

    client.on('timer-set', function(ticks, data){
        io.emit('timer-set', ticks, data);
    });
});

server.listen(port);
console.log('Server listening on port ' + port)
