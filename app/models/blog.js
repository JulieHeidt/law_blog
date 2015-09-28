//Blog Model
var mongoose = require( 'mongoose' ),
		Schema = mongoose.Schema,
		CommentSchema = require( "./comment.js" ),
		Comment = mongoose.model( "Comment" );

var BlogSchema = new mongoose.Schema( {
	title: { type:String, required: true },
	author: String,
	content: { type:String, required: true },
	created_at: { type: Date, default: Date.now },
	comment: [ Comment.schema ]
});

BlogSchema.pre('save', function(next) {
	this.created_at = new Date();
	next();
});



module.exports = mongoose.model( 'Blog', BlogSchema );
