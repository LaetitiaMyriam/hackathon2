app.controller('UserProfCtrl', ['$scope', 'artworks', 'auth', 'users', function ($scope, artworks, auth, users) {
  $scope.arrUsers = users.users;
  $scope.currentUsername = auth.currentUser().username;

  for (var j = 0; j < $scope.arrUsers.length; j++) {
    if ($scope.arrUsers[j].username === $scope.currentUsername) {
      $scope.currentUser = $scope.arrUsers[j];
    }
  };


  $scope.addArt = function() {
    console.log('controller addArt');
    users.uploadArt($scope.currentUser._id, {artworks: $scope.artImage});

    $scope.artImage = '';
  };

}]);