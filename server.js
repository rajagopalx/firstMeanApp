var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    chatController = require('./server/controllers/chat-server-controller.js');

    mongoose.connect('mongodb://localhost:27017/first-mean');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use(bodyParser.json());

app.get('/api/chats', chatController.list);

app.post('/api/chats', chatController.create);

app.listen(3000, function() {
    console.log("listening on 3000 ");
})
