var express = require('express'),
	blogRouter = express.Router(),
    blogsController = require( "../blogs/blogsController.js" ),
    Blog = require(  "../models/blog.js" );

blogRouter.param('blog_id', blogsController.blogById);

// RESTful routes:
blogRouter.route('/blogs')
  .post(blogsController.create)
  .get(blogsController.index);

apiRouter.route('/blogs/:blog_id')
  .get(blogsController.show)
  .patch(blogsController.update)
  .delete(blogsController.destroy);

module.exports = blogRouter;