var express = require('express'),
	blogRouter = express.Router(),
    blogsController = require( "../controllers/blogsController.js" ),
    Blog = require(  "../models/blog.js" );

// blogRouter.params('blog_id', blogsController.blogById);

// RESTful routes:
blogRouter.route('/blogs')
  .post(blogsController.create)
  .get(blogsController.index);

blogRouter.route('/blogs/:blog_id')
  .get(blogsController.show)
  .patch(blogsController.update)
  .delete(blogsController.destroy);

module.exports = blogRouter;