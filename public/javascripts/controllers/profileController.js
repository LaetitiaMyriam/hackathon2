app.controller('UserProfCtrl', ['$scope', 'artworksService', 'auth', 'users', function ($scope, artworksService, auth, users) {
  $scope.arrUsers = users.users;
 
  $scope.artworks = [];
  // console.log('thisUsrArtworks', $sc);
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


  // $scope.currentUsermail = auth.currentUser().email;


  // for (var z = 0; j < $scope.arrUsers.length; z++) {
  //   if ($scope.arrUsers[z].mail === $scope.currentUsermail) {
  //     $scope.currentUser = $scope.arrUsers[z];
  //   }
  // };


  $scope.artworks = $scope.currentUser.artworks;


}]);

