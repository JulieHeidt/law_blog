var Comment = require( '../models/comment.js' );

function index(req, res) {
    Comment.find(function(err, comments) {
        if(err) {
            console.log('Error: ' + err );
            res.send( err );
        }
        res.json(comments);
    })
}

function create( req, res ) {
    var comment = new Comment();
    comment.name = req.body.name
    comment.content = req.body.content
    comment.save( function( err ) {
        console.log( err );
    });
    res.json( comment );
}

function show( req, res ) {
  Comment.findById( req.params.comment_id, function( err, comment ) {
    if ( err ) {
      res.send( err );
    }
    res.json( comment );
  });
}

function update(req, res) {
  var data = request.body,
      comment = request.comment;
      
  comment.save(function(err) {
    if (err) console.error('Could not update comment b/c:', err);
    response.json({message: 'comment successfully updated'});
  });
}

function destroy(req, res) {
  Comment.remove({ _id: request.params.comment_id }, function(err) {
    if (err) { res.send( err ) };

    res.json( { message: 'Article successfully deleted' } );
  })
}

function comById ( req, res, next, id ) {
  Blog.findById( id ).populate( 'comment' ).exec( function( err, blog ) {
        if ( err ) return next( err );
        if ( ! blog ) return next(new Error( 'Failed to load Blog ' + id ));
        req.blog = blog;
        next();
    });
};

module.exports = {
  comById: comById,
  create: create,
  index: index,
  show: show,
  update: update,
  destroy: destroy
};
