var express = require( "express" ),
    app = express(),
    path = require( "path" ),
    morgan = require( "morgan" ),
    mongoose = require( "mongoose" ),
    bcrypt = require( "bcrypt-nodejs" ),
    bodyParser = require( "body-parser" ),
    expressLayouts = require( "express-ejs-layouts" ),
    router = express.Router,
    port = 8080;


app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json );
app.use( expressLayouts );
app.use( express.static( __dirname + "assets" ) );
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );
app.engine( "ejs", require( "ejs" ).renderFile );


app.listen( port );


app.get( "/", function( req, res ) {
  res.render( "./users/login.ejs" );
});
