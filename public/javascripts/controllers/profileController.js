app.controller('UserProfCtrl', ['$scope', 'artworksService', 'auth', 'users', function ($scope, artworksService, auth, users) {

  $scope.arrUsers = users.users;
  $scope.uploadedImage;
  $scope.imagesObj;

  $scope.howdy = function() {
    alert("hello");
  }


  console.log('users', $scope.arrUsers);

  $scope.showImg = function(){
    console.log('hello')
    console.log($scope.imagesObj);
  }


  $scope.test = function(obj){
    console.log($scope.imagesObj);
  };


  $scope.currentUsername = auth.currentUser().username;


  for (var j = 0; j < $scope.arrUsers.length; j++) {
    if ($scope.arrUsers[j].username === $scope.currentUsername) {
      $scope.currentUser = $scope.arrUsers[j];
    }
  };


  $scope.addArt = function() {

    users.addArtToDb($scope.currentUser._id, {image: $scope.artImage});
    $scope.artImage = '';
  };


}]);