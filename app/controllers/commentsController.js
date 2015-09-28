var Comment = require('../models/comment');

//Create function, new comment post
function create(req, res) {
    var comment = new Comment();
    comment.name = req.body.name
    comment.content = req.body.content

    comment.save(function(err) {
        res.json( { message: 'Comment Created ID: ' + comment.id } )
    });
}

function index(req, res) {
    Comment.find(function(err, comments) {
        if(err) {
            console.log('Could not index comments!')
            res.json( err );
        }
        res.json(comments);
    })
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
  var data = request.body; //not sure about this line?
  var comment = request.comment
  Comment.findById( req.params.comment_id, function ( err, comment ) {
    if ( err ) { res.send( err ); }
    if ( req.body.name ) { comment.name = req.body.name; }
    if ( req.body.content ) { comment.content = req.body.content; }
    comment.save( function () {
      if ( err ) { res.send( err ); }
    });
    res.json( { message: comment.id + " has been updated" } );
    });
  }

  // Object.keys(data).forEachcomment(function(key) {
  //   comment.set(key, data[key]);
  // });

function destroy( req, res ) {
  Comment.remove({ _id: request.params.comment_id }, function(err) {
    if ( err ) { res.send( err ); }
    res.json({message: 'comment successfully deleted'});
  });
}

module.exports = {
  create: create,
  index: index,
  show: show,
  update: update,
  destroy: destroy
};
