var express = require( "express" ),
    app = express(),
    path = require( "path" ),
    morgan = require( "morgan" ),
    mongoose = require( "mongoose" ),
    bcrypt = require( "bcrypt-nodejs" ),
    bodyParser = require( "body-parser" ),
    expressLayouts = require( "express-ejs-layouts" ),
    router = express.Router,
    userRouter = require( "./app/config/usersRoute.js" ),
    blogRouter = require( "./app/config/blogsRoute.js" ),
    commentRouter = require( "./app/config/commentsRoute.js" ),
    DB = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/law_blog',
  	port = process.env.PORT || 3000;

mongoose.connect( DB );

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.set( "views", path.join( __dirname, "app/views" ) );
app.use( expressLayouts );
app.engine( "ejs", require( "ejs" ).renderFile);
app.set( "view engine", "ejs");
app.use( express.static( __dirname + "/app/assets") );
app.use( userRouter );
app.use( blogRouter );
app.use( commentRouter );


app.listen( port );
