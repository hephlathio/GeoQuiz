
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path       = require('path');
var mongoose   = require('mongoose');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require('path');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

//Set root folder
app.use(express.static(path.join(__dirname, 'public')));

//Set access and allow for geosearch
//app.use('/geosearch', express.static(__dirname + '/node_modules/leaflet-geosearch/dist/'));

mongoose.Promise = global.Promise; // avoid error - don't know what it does though

//Connect to db:
mongoose.connect('mongodb://heroku_8dg8fhxt:d20n7eafi30j543hsil10gslsf@ds157839.mlab.com:57839/heroku_8dg8fhxt');

// =========  API =======================================================================================================================

//Import DB models:
//var Hostel      = require('./models/hostel');


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /
app.use('/', router);

// test route to make sure everything is working (accessed at GET http://localhost:8080/)
router.get('/', function(req, res) {
    res.sendfile('index.html', { root: __dirname + "/public" } );
});

// more routes for our API will happen here:



// START THE SERVER (happens in .bin/www, and therefor have to export the module to make it importable)
// ====================================================================================================

console.log("App running on localhost:8080");
module.exports = app;

