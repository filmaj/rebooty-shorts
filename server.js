var five = require('johnny-five');
var http = require('http');
var url = require('url');

var board = new five.Board();
var start = 110, end = 90;


board.on("ready", function() {
    var servo = new five.Servo({
        pin: "7",
        startAt:start
    });
    var holdButtonFor = function perform(time) {
        console.log('Engaging...');
        servo.to(end);
        setTimeout(function() {
            console.log('Going back.');
            servo.to(start);
        }, time);
    };
    var server = http.createServer(function(req, res) {
        var route = url.parse(req.url).pathname.substr(1);
        switch (route) {
            case 'hold':
                holdButtonFor(2000);
                break;
            case 'tap':
                holdButtonFor(500);
                break;
        }
        res.writeHead(200);
        res.write(":)\n");
        res.end();
    });

    server.listen(8000);
    console.log('Listening to localhost:8000');
});
