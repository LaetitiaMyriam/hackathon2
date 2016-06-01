app.factory('artworks', ['$http', 'auth', function($http, auth) {
    var artworks = [{
      name:"robocop",
      Image:"http://upload.wikimedia.org/wikipedia/en/b/b1/Robocop_poster.jpg",
      upvotes: 2
    }, {
      name:"robocop",
      Image:"http://vignette2.wikia.nocookie.net/disney/images/5/58/Frozen-movie-poster.jpg/revision/latest/scale-to-width-down/1000?cb=20131002122858",
      upvotes: 3
    }, {
      name:"robocop",
      Image:"http://t2.gstatic.com/images?q=tbn:ANd9GcSB6Vsz4iWHiML-6wQmsN5pQoo9VBxE_vIvplPInW06hqeojGmk",
      upvotes: 8
    }, {
      name:"robocop",
      Image:"http://upload.wikimedia.org/wikipedia/en/b/b1/Robocop_poster.jpg",
      upvotes: 2
    }, {
      name:"robocop",
      Image:"http://vignette2.wikia.nocookie.net/disney/images/5/58/Frozen-movie-poster.jpg/revision/latest/scale-to-width-down/1000?cb=20131002122858",
      upvotes: 3
    }, {
      name:"robocop",
      Image:"http://t2.gstatic.com/images?q=tbn:ANd9GcSB6Vsz4iWHiML-6wQmsN5pQoo9VBxE_vIvplPInW06hqeojGmk",
      upvotes: 8 
    }
  ];
  
  var getArtworks = function(){
      return artworks;
  }
  
  return {
      getArtworks: getArtworks
  } 
}]);