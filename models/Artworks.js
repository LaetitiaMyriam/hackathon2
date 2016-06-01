var mongoose = require('mongoose');

var ArtworkSchema = new mongoose.Schema({
  name: String,
  image: String,
  upvotes: {type: Number, default: 0}
});

ArtworkSchema.methods.upvote = function() {
  this.upvotes += 1;
};

var Artwork = mongoose.model('Artwork', ArtworkSchema);

module.exports = Artwork;