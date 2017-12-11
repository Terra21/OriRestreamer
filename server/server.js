var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var port = 8080;

app.use(express.static(__dirname + '/node_modules'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(client) {  
    client.on('data', function(data){
        io.emit('data', data);
    });

    client.on('timer', function(start){
        io.emit('timer', start);
    })
});

server.listen(port);
console.log('Server listening on port ' + port)