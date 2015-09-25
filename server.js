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
app.use( bodyParser.json() );
app.set( "views", path.join( __dirname, "app/views" ) );
app.use( expressLayouts );
app.engine( "ejs", require( "ejs" ).renderFile);
app.set( "view engine", "ejs");
app.use( express.static( __dirname + "/assets") );

app.listen( port );


app.get( "/", function( req, res ) {
  res.render( "./users/login.ejs" );
});
