app.factory('artworksService', ['$http', 'auth', function($http, auth) {
    var artworks = [{
      name:"Eugenie Berger",
      // Image:"http://upload.wikimedia.org/wikipedia/en/b/b1/Robocop_poster.jpg",
      Image:"http://media.virbcdn.com/cdn_images/resize_1024x1024/68/49630c7563ea695e-DSC1619_eugenie_sophie_berger_photography.jpg",
      comments: [{user:"b", text:"cool!"}],
      upvotes: 2,
      views: 1
    }, {
      name:"Eugenie Berger",
      Image:"http://media.virbcdn.com/cdn_images/resize_1024x1024/69/82bffd584ab309fb-_DSC3252_istanbul_eugenie_sophie_berger_photography.jpg",
      // Image:"http://vignette2.wikia.nocookie.net/disney/images/5/58/Frozen-movie-poster.jpg/revision/latest/scale-to-width-down/1000?cb=20131002122858",
      upvotes: 3
    }, {
      name:"Eugenie Berger",
      Image: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/7c/8f984513271a2e49-_DSC5376_oleron_eugenie_sophie_berger_photography.jpg',
      // Image:"http://t2.gstatic.com/images?q=tbn:ANd9GcSB6Vsz4iWHiML-6wQmsN5pQoo9VBxE_vIvplPInW06hqeojGmk",
      upvotes: 8
    }, {
      name:"Eugenie Berger",
      // 
      Image: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/4e/5581bc499cc076c6-_DSC1609_telaviv_travel_door_eugenie_sophie_berger_photographie.jpg',
      upvotes: 2
    }, {
      name:"Eugenie Berger",
      Image: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/31/b481d9e7784d9858-Cup_Tea_eugenie_sophie_berger.jpg',
      // Image:"http://vignette2.wikia.nocookie.net/disney/images/5/58/Frozen-movie-poster.jpg/revision/latest/scale-to-width-down/1000?cb=20131002122858",
      upvotes: 3
    }, {
      name:"Eugenie Berger",
      Image: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/1a/3af6989c6fa67708-_DSC8785_telaviv_eugenie_sophie_berger_photography.jpg',
      // Image:"http://t2.gstatic.com/images?q=tbn:ANd9GcSB6Vsz4iWHiML-6wQmsN5pQoo9VBxE_vIvplPInW06hqeojGmk",
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