app.controller('UserProfCtrl', ['$scope', 'artworksService', 'auth', 'users', function ($scope, artworksService, auth, users) {
  $scope.arrUsers = users.users;
  $scope.currentUsername = auth.currentUser().username;

  for (var j = 0; j < $scope.arrUsers.length; j++) {
    if ($scope.arrUsers[j].username === $scope.currentUsername) {
      $scope.currentUser = $scope.arrUsers[j];
    }
  };

  $scope.artworks = $scope.currentUser.artworks;


}]);
