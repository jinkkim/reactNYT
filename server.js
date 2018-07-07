var path = require('path')
var express = require("express");
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.text());

app.use(express.static(process.cwd() + '/public'));

//mongoDB
var mongoose = require("mongoose");
mongoose.Promise = Promise;
//var mongoDBUrl = "mongodb://localhost:27017/nytreact";
var mongoDBUrl = "mongodb://heroku_jkqw4m46:khrgvngfl5mvc491a859au4uc8@ds129811.mlab.com:29811/heroku_jkqw4m46"
mongoose.connect(mongoDBUrl, function(error)
	{
	console.log("Database connected");
});

const Article = require('./models/Article.js');


//set handlebars as the view engine
//var handlebars = require("express-handlebars");
//app.engine("handlebars", handlebars({
//    extname: "handlebars",
//    defaultLayout: "main",
//    layoutsDir: __dirname + "/views/layout/",
//    partialsDir: __dirname + "/views/partial/"
//}));
//app.set("view engine", "handlebars");

//app.get('/', (req, res) => res.render('index'));


//-------------news control----------------------------

app.get('/api/saved', function (req, res) {
    // Find all articles.
    Article.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {

            // Create array for article data.
            var resultData = [];

            // For each article, create an object that we will use to render the article.
            data.forEach(function (article) {
                resultData.push({
                    _id:article._id,
                    title: article.title,
                    url: article.url,
                    date: article.date,
                });
            });
            res.send(resultData);
        }
    });
});

// Add doc to saved.
app.post('/api/saved', function (req) {
    var body = req.body;
    var newArticle = {
        title: body.title,
        url: body.url,
        date: body.date,

    };
    var query = {url: body.url};
    Article.findOneAndUpdate(query, newArticle, {upsert: true}, function(err) {
        if (err) {
            console.log(err);
        }

    });
});

// Remove doc from saved.
app.delete('/api/saved/:id', function (req) {
    //console.log(req.params)
    Article.remove({_id: req.params.id}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("article removed!")
    });
});


// Default route.
app.use('*', function (req, res) {
    res.sendFile(__dirname+'/views/index.html');
});

///----------------------------------------------------------


//Listening
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("listening on " + PORT);
});