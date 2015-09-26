//Comment Model
var mongoose = require( 'mongoose' ),
	Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema( {
	name: { String, required: true },
	content: { String, required: true },
	created_at: Date
});

Comment Schema.pre('save', function(next) {
	this.created_at = new Date();
	next();
});

module.exports = mongoose.model( 'Comment', CommentSchema );