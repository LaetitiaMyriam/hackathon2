app.controller('MainCtrl', ['$scope', 'artworksService', function ($scope, artworksService) {
   $scope.artworks = artworksService.getArtworks();



}]);