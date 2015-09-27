var Blog = require('../models/blog');

function blogById( req, res, next, id) {
	Blog.findById( req.params.blog_id, function() {
		if ( err ) {
			res.json( err )
		}
		res.json ( Blog )
		next();
	});
};

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
	})
}

function index ( req, res ) {
	Blog.find( function( err, blogs ) {
    if ( err ) {
    	console.log('Could not find blog because: ' + error) 
    	res.send( err );
    } 
    res.json( { message: "here are the blogs!"} )
  	});
};

function show( req, res ) {
	res.json( req.bdoy );
};
    	console.log('Could not find blog because:' + err )
    	res.send( err );
    }
    res.json( blogs )
  	})
}

function show( req, res ) {
	Blog.findById( req.params.blog_id, function( err, blog ) {
    if ( err ) {
    	console.log('Could not find blog because:' + err)
    	res.send( err );
    }
    res.json( blog )
  	})
}

function update( req, res ) {
	// var blog = req.blog,
	blog.save(function( err ) {
	if ( err ) {
		console.log( "Could not update blog because ", err);
	}
	res.json( { message: "blog updated!" } );
	});
};

function destroy ( req, res ) {
	blog.remove( { _id: req.params.blog_id }, function( err ) {
	if ( err ) {
		console.log ("Unable to delete blog")
	}
	res.json( { message: "blog deleted!" } )
	});
};

module.exports = {
  blogById: blogById,
  create: create,
  index: index,
  show: show,
  update: update,
  destroy: destroy
};
