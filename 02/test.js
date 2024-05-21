// TEST


var express = require('express');
var app = express();

var router = express.Router();

router.route('/')
  .get((req, res) => {
    // This shows the request happening
    console.log("Request");
    res.send("test hello");
  });

app.use('/', router);

var server = app.listen(10001);
server.setTimeout(5*60*1000);

var stopping = false;
process.on('SIGINT', function() {
  if (stopping) {
    process.exit();
  }
  console.log("stopping")
  stopping = true;
  server.close(() => {console.log("server close complete")});
  console.log("stopped")
});


// This shows the connections being made
var lastsocket = null;
server.on('connection', function(socket) {
console.log("connection", lastsocket == socket);
lastsocket = socket;
  socket.setTimeout(1000);
});

