var Blog = require('../models/blog');

function blogById(request, response, next, id) {
	Blog.findById(id, function(error, blog) {
	if (error) 
		console.log ('could not update blog')

	request.blog = blog;
	next();
	});
}
//Create function, new blog post 
function create(req, res) {
	var blog = new Blog(request.body);
	blog.save(function(err) {
		res.json({message: 'Blog was successfully created'})
	});
}

function index(req, res) {
	Blog.find(function(err, blogs) {
		if(err) {
			console.log('Could not index blogs!')
			res.json(blogs);	
		}
	})
}
function show(req, res) {
  res.json(request.blog);
}

function update(req, res) {
  var data = request.body; //not sure about this line?
  var blog = request.blog

  Object.keys(data).forEachblog(function(key) {
    blog.set(key, data[key]);
  });

  blog.save(function(err) {
    if (err) console.error('Could not update blog b/c:', error);
    response.json({message: 'blog successfully updated'});
  });
}

function destroy(req, res) {
  Blog.remove({ _id: request.params.article_id }, function(error) {
    if (err) console.log('Could not delete article b/c:', error);

    res.json({message: 'Article successfully deleted'});
  })
}

module.exports = {
  blogById: blogById,
  create: create,
  index: index,
  show: show,
  update: update,
  destroy: destroy
};