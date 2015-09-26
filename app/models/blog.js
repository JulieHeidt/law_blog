//BLOG MODEL
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//create new schema
var BlogSchema = new Schema {
	title: String
	author: String,
	created_at: Date,
	content: String
}
// defines prehook
// before each save the created_at value will be set
BlogSchema.pre('save', function(next) {
	this.created_at = new Date();
	next();
});

module.exports = mongoose.model('Blog', BlogSchema);