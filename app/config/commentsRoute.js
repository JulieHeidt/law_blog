var express = require('express'),
		commentRouter = express.Router(),
	  commentsController = require( "../controllers/commentsController.js" ),
		blogsRoute = require( "./blogsRoute.js" );

commentRouter.use( function ( req, res, next ) {
  console.log( "This is a comment Route" )
  next();
});

// RESTful routes:
commentRouter.route('/blogs/:blog_id/comments')
	.get(commentsController.index)
	.post(commentsController.create);


//
commentRouter.route('/blogs/:blog_id/comments/:comment_id')
  .get(commentsController.show)
  .patch(commentsController.update)
  .delete(commentsController.destroy);

module.exports = commentRouter;
