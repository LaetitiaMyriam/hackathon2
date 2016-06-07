var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  artwork: { type: mongoose.Schema.Types.ObjectId, ref: 'Artwork' }
});

CommentSchema.methods.upvote = function() {
  this.upvotes += 1;
};

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;