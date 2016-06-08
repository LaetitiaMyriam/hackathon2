app.controller('MainCtrl', ['$scope', 'artworksService', function ($scope, artworksService) {
   $scope.artworks = artworksService.getArtworks();
   // console.log($scope.artworks);
   $scope.currentArtwork;

   $scope.showFilePage = function (artwork) {
    $scope.currentArtwork = artwork;
    // console.log($scope.currentArtwork);
   };

}]);