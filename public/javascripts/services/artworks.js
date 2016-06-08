app.factory('artworksService', ['$http', 'auth', 'users', function($http, auth, users) {
  var artworks = [];


  var randomizeArtworks = function () {    
    artworks = [];

    for ( var i = 0; i < users.users.length; i++){
      for (var j = 0; j < users.users[i].artworks.length; j++){
        artworks.push(users.users[i].artworks[j]);
      }
    }



    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    }
    shuffle(artworks);
  };


  var getArtworkById = function(id) {
    for ( var i = 0; i < users.users.length; i++) {
      for (var j = 0; j < users.users[i].artworks.length; j++) {
        if (users.users[i].artworks[j]._id === id) {  
          return users.users[i].artworks[j];
        } 
      };
    };
  };


  var getArtworks = function() {
      randomizeArtworks();

      return artworks;
  };


  var addUpvotes = function (artwork) {

      obj = {
        userId: artwork.userId,
        artId: artwork._id,
        likes: artwork.likes
      }

      return $http.put('/artworks/comments', obj);
    };

  var addComment = function(id, userId, comment) {


    obj = {
      userId: userId,
      artId: id,
      comment: comment
    };


      return $http.post('/users/comments', obj);
    };



  var obj = {    
    addComment: addComment,
    addUpvotes: addUpvotes,
    getArtworkById: getArtworkById,
    getArtworks: getArtworks
  } 
  
  return obj;

}]);





  // var upvote = function(artwork) {
  //     return $http.put('/users/' + user._id + '/artworks/' + artwork._id + '/upvotes' , null).success(function(data){
  //       artwork.upvotes += 1;
  //     });
  //   };

  // var addComment = function(artwork, comment) {
  //   console.log(artworks[artwork]);
  //     artworks[artwork].comments.push(comment);
  //   };







// {
//       id : "7147fd14",
//       userId: "57570ef60147fd14366aeb66",
//       username: "b",
//       artworkname: "ARTWORKNAME",
//       url:"https://res.cloudinary.com/tlvart/image/upload/v1465320514/ug2vvfxdcexb5mnlr9ug.jpg",
//       comments:[{
//           body: "",
//           author: ""
//       }],
//       upvotes: 8
//     }, {
//       id : "1",
//       userId: "575",
//       username: "Eugenie Berger",
//       artworkname: "ARTWORKNAME22",
//       url:"http://media.virbcdn.com/cdn_images/resize_1024x1024/69/82bffd584ab309fb-_DSC3252_istanbul_eugenie_sophie_berger_photography.jpg",
//       comments:[{
//           body: "",
//           author: ""
//       }],
//       upvotes: 10
//     }, {
//       id : "2",
//       userId: "575",
//       username: "Eugenie Berger",
//       artworkname: "ARTWORKNAME333",
//       url: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/7c/8f984513271a2e49-_DSC5376_oleron_eugenie_sophie_berger_photography.jpg',
//       comments:[{
//           body: "",
//           author: ""
//       }],
//       upvotes: 8
//     }, {
//       id : "3",
//       userId: "aeb66",
//       username: "Eugenie Berger",
//       artworkname: "ARTWORKNAME4444",
//       url: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/4e/5581bc499cc076c6-_DSC1609_telaviv_travel_door_eugenie_sophie_berger_photographie.jpg',
//       comments:[{
//           body: "",
//           author: ""
//       }],      
//       upvotes: 2
//     }, {
//       id : "4",
//       userId: "57b66",
//       username: "Eugenie Berger",
//       artworkname: "ARTWORKNAME555",
//       url: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/31/b481d9e7784d9858-Cup_Tea_eugenie_sophie_berger.jpg',
//       comments:[{
//           body: "",
//           author: ""
//       }],        
//       upvotes: 34
//     }, {
//       id : "5",
//       userId: "575706",
//       username: "Eugenie Berger",
//       artworkname: "ARTWORKNAME555",
//       url: 'http://media.virbcdn.com/cdn_images/resize_1024x1024/1a/3af6989c6fa67708-_DSC8785_telaviv_eugenie_sophie_berger_photography.jpg',
//       comments:[{
//           body: "",
//           author: ""
//       }],       
//       upvotes: 8
//     }