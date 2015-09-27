//Comment Model
var mongoose = require( 'mongoose' ),
	Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema( {
	name: { type:String, required: true },
	content: { type:String, required: true },
	created_at: Date
});

CommentSchema.pre('save', function(next) {
	this.created_at = new Date();
	next();
});

module.exports = mongoose.model( 'Comment', CommentSchema );