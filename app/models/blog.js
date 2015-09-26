//Blog Model
var mongoose = require( 'mongoose' ),
	Schema = mongoose.Schema;

var BlogSchema = new mongoose.Schema( {
	title: { String, required: true }
	author: String,
	created_at: Date,
	content: { String, required: true }
});

BlogSchema.pre('save', function(next) {
	this.created_at = new Date();
	next();
});

module.exports = mongoose.model( 'Blog', BlogSchema );