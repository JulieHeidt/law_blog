var express = require( "express" ),
    userRouter = express.Router(),
    usersController = require( "../controllers/usersController.js" );


// login
userRouter.route( "/" )
  .get( usersController.login );



// index users


// show users


module.exports = userRouter;
