


function login ( req, res ) {
  // if ( err ) {
  //   console.log( err );
  // }
  res.render( "./users/login.ejs" );
}

module.exports = {
  login: login
};
