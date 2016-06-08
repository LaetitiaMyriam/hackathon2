app.controller('MainCtrl', ['$scope', 'artworksService', function ($scope, artworksService) {
   $scope.artworks = artworksService.getArtworks();
   $scope.currentArtwork;

   $scope.showFilePage = function (artwork) {
    $scope.currentArtwork = artwork;
   };

}]);