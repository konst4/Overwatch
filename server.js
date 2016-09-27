/**
 * Created by Collin on 9/22/2016.
 */

var express = require('express');           //creates server that listens to http requests
var bodyParser = require('body-parser');    //parses Json requests over AJAX
var app = express();
var sentiment = require('sentiment');       //review items that get sent with an AJAX request

app.use(bodyParser.urlencoded({extended:true}));  //configuration to tell express to use the body parser module

app.use(express.static("public"));      //tell express that anything that is public in this file it should just serve up as a file

app.post("/", function(req, res){       //set up server to listen for post requests //when a request is recieved this is the function to be called

    var sentiments = [];
    for(var item of req.body.todoITems)
    {
        sentiments.push(sentiment(item).score);
    }
    res.json({sentiments: sentiments});
});

todosRef.push()

var port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});