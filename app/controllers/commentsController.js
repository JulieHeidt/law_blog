var Comment = require('../models/comment.js');

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

function update( req, res ) {
  var comment = request.comment
  Comment.findById( req.params.comment_id, function ( err, comment ) {
    if ( err ) { res.send( err ); }
    if ( req.body.name ) { comment.name = req.body.name; }
    if ( req.body.content ) { comment.content = req.body.content; }
    comment.save( function () {
      if ( err ) { res.send( err ); }
    });
    res.json( comment );
    });
}

function destroy( req, res ) {
  Comment.remove({ _id: request.params.comment_id }, function(err) {
    if ( err ) { res.send( err ); }
    res.json( { message: 'comment successfully deleted' } );
  });
}


module.exports = {
  create: create,
  index: index,
  show: show,
  update: update,
  destroy: destroy
};
