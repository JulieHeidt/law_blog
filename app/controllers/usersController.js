var User = require( "../models/user.js" );

function index ( req, res ) {
  User.find( function( err, users ) {
		if( err ) {
      res.send( err );
    }
		res.json( users );
	})
};

function login ( req, res ) {
  res.render( "./users/login.ejs" );
};

function create ( req, res ) {
  var user = new User();
  user.firstName = req.body.firstName
  user.lastName = req.body.lastName
  user.email = req.body.email
  user.password = req.body.password
  user.save( function ( err ) {
    if ( err ) {
      res.send( err );
    }
    res.json( { message: user.firstName + " Created" } )
  });
};

function show ( req, res ) {
  User.findById( req.params.user_id, function ( err , user ) {
    if ( err ) {
      res.send( err );
    }
    res.json( user );
  });
}

function update ( req, res ) {
  User.findById( req.params.user_id, function ( err, user ) {
    if ( err ) { res.send( err ); }
    if ( req.body.firstName ) { user.firstName = req.body.firstName; }
    if ( req.body.lastName ) { user.lastName = req.body.lastName; }
    if ( req.body.email ) { user.email = req.body.email; }
    if ( req.body.password ) { user.password = req.body.password; }
    user.save( function () {
      if ( err ) { res.send( err ); }
    });
    res.json( { message: user.firstName + " has been updated" } );
  });
}

function destroy ( req, res ) {
  User.remove( { _id: req.params.user_id }, function ( err, user ) {
    if ( err ) { res.send( err ); }
    res.json( { message: "User Deleted" } );
  });
}

module.exports = {
  index: index,
  login: login,
  create: create,
  show: show,
  update: update,
  destroy: destroy
};
