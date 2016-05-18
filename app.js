'use strict';

var express = require('express');
var expressHandlebars = require('express-handlebars');
var http = require('http');

var homeController = require('./controllers/home');
var contactController = require('./controllers/contact');
var aboutController = require('./controllers/about');
var propController = require('./controllers/prop');
// var associateController = require('./controllers/associate');
// var associateFormController = require('./controllers/associateForm');
// var mongoose = require('mongoose');

// mongoose.connect(process.env.MONGOLAB_URI);	
//     var db = mongoose.connection;
//         db.on('error', console.error.bind(console, 'connection error:'));
//         db.once('open', function() {
//         console.log("DB is connected - " + process.env.MONGOLAB_URI);     
// });



var app = express();
var port = process.env.PORT || 8080;


app.engine('.hbs', expressHandlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use('/', homeController);
app.use('/contacto', contactController);
app.use('/sobre-nosotros', aboutController);
app.use('/propiedades', propController);
// app.use('/associate', associateController);
// app.use('/associateForm', associateFormController);

app.use('/public', express.static(__dirname + '/public'));

http.createServer(app).listen(port, function onListening() {
    
    console.log('Server listening on port ' + port);
});
