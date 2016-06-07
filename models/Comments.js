var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0}
});

CommentSchema.methods.upvote = function() {
  this.upvotes += 1;
};

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;