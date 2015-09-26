var User = require( "../models/user.js" );


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
    console.log( err )
    if ( err ) {
      res.send( err );
    }
    res.json( { message: user.firstName + " Created" } )
  });
};

function index ( req, res ) {
  User.findById( req.params.user_id, function () {
    if ( err ) {
      res.json( err )
    }
    res.json( User )
  });
};

module.exports = {
  login: login,
  create: create
};
