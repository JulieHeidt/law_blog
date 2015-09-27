var mongoose =require( "mongoose" ),
    bcrypt = require( "bcrypt-nodejs" );

var UserSchema = new mongoose.Schema({
  // firstName: String,
  // lastName: String,
  // email: String,
  // password: String
  firstName: { type:String, required: true },
  lastName: { type:String, required: true },
  email: { type:String, required: true, index: { unique: true } },
  password: { type: String, required: true, select: false }
});

UserSchema.pre( 'save', function( next ){
  var user = this;
	if( !user.isModified( 'password' ) ) {
		return next();
	}
	bcrypt.hash( user.password, null, null, function( err, hash ) {
		if( err ){
			return next( err );
		}
		user.password = hash;
		next();
	});
});

module.exports = mongoose.model( 'User', UserSchema );
