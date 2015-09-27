var express = require('express'),
	commentRouter = express.Router(),
    commentsController = require( "../controllers/commentsController.js" ),
    Comment = require( "../models/comment.js" );

commentRouter.use( function ( req, res, next ) {
  console.log( "This is a comment Route" )
  next();
});

// RESTful routes:
commentRouter.route('/comments')
  .post(commentsController.create)
  .get(commentsController.index);

//
commentRouter.route('/comments/:comment_id')
  .get(commentsController.show)
  .patch(commentsController.update)
  .delete(commentsController.destroy);

module.exports = commentRouter;