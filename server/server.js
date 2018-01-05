var express = require('express');  
var app = express();  
var fs = require('fs');
var server = require('http').createServer(app);
var sslServer = require('https').createServer({
    key: fs.readFileSync('debug\\server.key'),
    cert: fs.readFileSync('debug\\server.crt')
},app);
var io = require('socket.io')(server, sslServer);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/node_modules'));  
app.get('/', function(req, res,next) {  
    //res.sendFile(__dirname + '/index.html');
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
sslServer.listen(3001);
console.log('Server listening on port ' + port)
console.log('SSL Server listening on port ' + 3001)