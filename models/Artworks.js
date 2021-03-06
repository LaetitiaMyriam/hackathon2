var mongoose = require('mongoose');

var ArtworkSchema = new mongoose.Schema({
  type: Number,
  id: String,
  userId: String,
  username: String,
  artworkname: String,
  url: String,
  comments: Array,
  likes: {type: Number, default: 0}
});

ArtworkSchema.methods.upvote = function() {
  this.upvotes += 1;
};

var Artwork = mongoose.model('Artwork', ArtworkSchema);

module.exports = Artwork;