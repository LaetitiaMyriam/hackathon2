app.controller('UserProfCtrl', ['$scope', 'artworksService', 'auth', 'users', function ($scope, artworksService, auth, users) {
  $scope.arrUsers = users.users;

  $scope.artworks = [];
  // console.log('userprofileUsers', $scope.arrUsers);
  // console.log('userprofileCurrentUser', auth.currentUser());
  
  $scope.uploadedImage;
  $scope.imagesObj;

  $scope.currentUsername = auth.currentUser().username;


  for (var j = 0; j < $scope.arrUsers.length; j++) {
    if ($scope.arrUsers[j].username === $scope.currentUsername) {
      $scope.currentUser = $scope.arrUsers[j];
    }
  };




  // $scope.returnArtworks = function () {
  //   for ( var i = 0; i < users.users.length; i ++ ){
  //       if (users.users[i]._id == auth.currentUser()._id){
  //         var array = [];
  //         array.push(users.users[i].artworks);
  //         return array;
  //         }
  //     };
  //   };





  // $scope.addArt = function() {
  //   users.addArtToDb($scope.currentUser._id, {image: $scope.artImage});
  //   $scope.artImage = '';
  // };


}]);