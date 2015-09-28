//Comment Model
var mongoose = require( 'mongoose' ),
		Schema = mongoose.Schema,
		blogsController = require( "../controllers/blogsController.js" );

var CommentSchema = new Schema({
	name: { type:String, required: true },
	content: { type:String, required: true },
	blog: [ { type: Schema.ObjectId, ref: "Blog" } ],
	created_at: { type: Date, default: Date.now }
});

CommentSchema.pre( 'save', function( next ) {
	this.created_at = new Date();
	next();
});



module.exports = mongoose.model( 'Comment', CommentSchema );
