app.controller('artworkCtrl', ['$scope', 'artworksService', '$stateParams', 'auth', function ($scope, artworksService, $stateParams, auth) {
    

    $scope.artwork = artworksService.getArtworkById($stateParams.artId);
    $scope.currUser = auth.currUser();
    
    console.log("hey");
    console.log($scope.artwork.Image);

   // };


}]);