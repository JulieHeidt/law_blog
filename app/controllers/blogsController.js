var Blog = require('../models/blog');

function create( req, res ) {

	var blog = new Blog( req.body );
	// blog.title = req.body.title
	// blog.author = req.body.author
	// blog.content = req.body.content

	var blog = new Blog();
	blog.title = req.body.title
	blog.author = req.body.author
	blog.content = req.body.content
	blog.save( function (err) {
		console.log( err )
		if (err) {
			res.send( err );
		}
		res.json( { message: "blog created with id of " + blog.id })
	});
};

function index ( req, res ) {
	Blog.find( function( err, blogs ) {
    if ( err ) {
    	console.log('Could not find blog because: ' + err)
    	res.send( err );
    }
    res.json( { message: "here are the blogs!"} )
  	});
};

function show( req, res ) {
  Blog.findById( req.params.blog_id, function ( err , blog ) {
    if ( err ) {
      res.send( err );
    }
    res.json( blog );
  });
}

function update( req, res ) {
	Blog.findById( req.params.blog_id, function ( err, blog ) {
    if ( err ) { res.send( err ); }
    if ( req.body.title ) { blog.title = req.body.title; }
    if ( req.body.author ) { blog.author = req.body.author; }
    if ( req.body.content ) { blog.content = req.body.content; }
    blog.save( function () {
      if ( err ) { res.send( err ); }
    });
    res.json( { message: blog.id + " has been updated" } );
  });
}


function destroy ( req, res ) {
	blog.remove( { _id: req.params.blog_id }, function( err ) {
    if ( err ) { res.send( err ); }
	res.json( { message: "blog deleted!" } )
	});
};

module.exports = {
  create: create,
  index: index,
  show: show,
  update: update,
  destroy: destroy
};
