var express = require('express'),
	commentRouter = express.Router(),
    commentsController = require( "../comments/commentsController.js" ),
    Comment = require(  "../models/comment.js" );

commentRouter.params('comment_id', commentsController.commentById);

// RESTful routes:
commentRouter.route('/comments')
  .post(commentsController.create)
  .get(commentsController.index);

//
apiRouter.route('/comments/:comment_id')
  .get(commentsController.show)
  .patch(commentsController.update)
  .delete(commentsController.destroy);

module.exports = commentRouter;