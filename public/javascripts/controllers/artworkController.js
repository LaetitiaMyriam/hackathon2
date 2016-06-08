app.controller('artworkCtrl', ['$scope', 'artworksService', '$stateParams', 'auth', function ($scope, artworksService, $stateParams, auth) {
    $scope.artwork = artworksService.getArtworkById($stateParams.artId);


    $scope.good = function () {
      if ($scope.artwork.comments === '') {
        return true;
      } else {
        return false;
      }
    };


    $scope.incrementUpvotes = function(artwork) {
      artworksService.addUpvotes(artwork);
    };


    $scope.addComment = function(){
    if($scope.body === '') { return; }

    artworksService.addComment($scope.artwork.id, $scope.artwork.userId, {
      body: $scope.body,
      author: auth.currentUser().username
    }).success(function(comment) {
      $scope.artwork.comments.push(comment);
    });

    $scope.body = '';
  };

}]);