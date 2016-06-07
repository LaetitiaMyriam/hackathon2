app.factory('artworksService', ['$http', 'auth', function($http, auth) {
    var artworks = [{
      id : "0",
      username: "Eugenie Berger",
      artworkname: "ARTWORKNAME",
      url:"http://media.virbcdn.com/cdn_images/resize_1024x1024/68/49630c7563ea695e-DSC1619_eugenie_sophie_berger_photography.jpg",
      comments:[{
          body: "",
          author: ""
      }],
    }, {
      id : "1",
      username: "Eugenie Berger",
      artworkname: "ARTWORKNAME22",
      url:"http://media.virbcdn.com/cdn_images/resize_1024x1024/69/82bffd584ab309fb-_DSC3252_istanbul_eugenie_sophie_berger_photography.jpg",
      comments:[{
          body: "",
          author: ""
      }],
      upvotes: 10
    }, {
      id : "2",
      username: "Eugenie Berger",
      artworkname: "ARTWORKNAME333",
      url: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/7c/8f984513271a2e49-_DSC5376_oleron_eugenie_sophie_berger_photography.jpg',
      comments:[{
          body: "",
          author: ""
      }],
      upvotes: 8
    }, {
      id : "3",
      username: "Eugenie Berger",
      artworkname: "ARTWORKNAME4444",
      url: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/4e/5581bc499cc076c6-_DSC1609_telaviv_travel_door_eugenie_sophie_berger_photographie.jpg',
      comments:[{
          body: "",
          author: ""
      }],      
      upvotes: 2
    }, {
      id : "4",
      username: "Eugenie Berger",
      artworkname: "ARTWORKNAME555",
      url: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/31/b481d9e7784d9858-Cup_Tea_eugenie_sophie_berger.jpg',
      comments:[{
          body: "",
          author: ""
      }],        
      upvotes: 34
    }, {
      id : "5",
      username: "Eugenie Berger",
      artworkname: "ARTWORKNAME555",
      url: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/1a/3af6989c6fa67708-_DSC8785_telaviv_eugenie_sophie_berger_photography.jpg',
      comments:[{
          body: "",
          author: ""
      }],       
      upvotes: 8 
    }
  ];

  var getArtworkById = function(id) {
    for(var i = 0; i < artworks.length; ++i) {
      if (artworks[i].id == id)
        return artworks[i];
    } return null;
  };
  
  var getArtworks = function() {
      return artworks;
  };

  var addUpvotes = function (artwork) {
      artwork.upvotes += 1;
    };

  // var upvote = function(artwork) {
  //     return $http.put('/users/' + user._id + '/artworks/' + artwork._id + '/upvotes' , null).success(function(data){
  //       artwork.upvotes += 1;
  //     });
  //   };

  var addComment = function(artwork, comment) {
    console.log(artworks[artwork]);
      artworks[artwork].comments.push(comment);
    };

  // var addComment = function(id, comment) {
  //     return $http.post('/users/' + id + '/comments', comment);
  //   };

  var obj = {    
    addComment: addComment,
    addUpvotes: addUpvotes,
    getArtworkById: getArtworkById,
    getArtworks: getArtworks
  } 
  
  return obj;

}]);