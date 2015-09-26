var express = require( "express" ),
    userRouter = express.Router(),
    usersController = require( "../controllers/usersController.js" ),
    User = require(  "../models/user.js" );


// login
userRouter.use( function ( req, res, next ) {
  console.log( "logged on" )
  next();
});

userRouter.route( "/new" )
  .post( usersController.create );

userRouter.route( "/login" )
  .get( usersController.login );




// index users


// show users


module.exports = userRouter;
