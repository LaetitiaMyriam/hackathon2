app.controller('artworkCtrl', ['$scope', 'artworksService', '$stateParams', 'auth', function ($scope, artworksService, $stateParams, auth) {
    $scope.artwork = artworksService.getArtworkById($stateParams.artId);
    
    $scope.incrementUpvotes = function(artwork) {
      artworksService.addUpvotes(artwork);
    }

    $scope.addComment = function(){
    if($scope.body === '') { return; }
    artworksService.addComment($scope.artwork.id, {
      body: $scope.body,
      author: auth.currentUser().username,
    })

    $scope.body = '';
  };

}]);