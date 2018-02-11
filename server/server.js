var express = require('express');
var app = express();
var fs = require('fs');
var server = require('http').createServer(app);

var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next) {
    //res.sendFile(__dirname + '/index.html');
});

function writeToFile(matches){
    fs.writeFile('matches.json', JSON.stringify(matches), function(err) {
        if(err) return console.log(err);
    });
}

io.on('connection', function(client) {
    client.on('data-write', function(data){

        let rawdata = fs.readFileSync('matches.json');
        let matches = JSON.parse(rawdata);

        for(var i = 0; i < matches.length; i ++){
            if(matches[i].seed == data.seed){
                matches[i] = data;
                writeToFile(matches);
                io.emit('data-read', data);
                return;
            }
        }

        matches.push(data);
        writeToFile(matches);
    });

    client.on('data-read', function(data){
        let rawdata = fs.readFileSync('matches.json');
        let matches = JSON.parse(rawdata);

        for(var i = 0; i < matches.length; i ++){
            if(matches[i].seed == data.seed){
                io.emit('data-read', matches[i]);
                return;
            }
        }
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
