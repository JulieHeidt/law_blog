var express = require( "express" ),
    userRouter = express.Router(),
    usersController = require( "../controllers/usersController.js" ),
    User = require(  "../models/user.js" );


userRouter.use( function ( req, res, next ) {
  console.log( "logged on" )
  next();
});

userRouter.route( "/users/new" )
  .post( usersController.create );

userRouter.route( "/users/login" )
  .get( usersController.login );

userRouter.route( "/users" )
  .get( usersController.index );

userRouter.route( "/users/:user_id" )
  .get( usersController.show )
  .put( usersController.update )
  .delete( usersController.destroy );


module.exports = userRouter;
