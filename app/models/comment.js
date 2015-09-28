//Comment Model
var mongoose = require( 'mongoose' ),
		Schema = mongoose.Schema,
		BlogSchema = require( "./blog.js" );

var CommentSchema = new Schema({
	name: { type:String, required: true },
	content: { type:String, required: true },
	created_at: { type: Date, default: Date.now },
	blog: String
});

CommentSchema.pre( 'save', function( next ) {
	this.created_at = new Date();
	next();
});



module.exports = mongoose.model( 'Comment', CommentSchema );
