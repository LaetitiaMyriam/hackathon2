app.controller('artworkCtrl', ['$scope', 'artworksService', '$stateParams', 'auth', function ($scope, artworksService, $stateParams, auth) {
    $scope.artwork = artworksService.getArtworkById($stateParams.artId);


    console.log($scope.artwork);

    $scope.good = function () {
      if ($scope.artwork.comments === '') {
        return true;
      } else {
        return false;
      }
    };


    $scope.incrementUpvotes = function(artwork) {
      
      $scope.artwork.likes ++;
      artworksService.addUpvotes(artwork);
    };


    $scope.addComment = function(){
    if($scope.body === '') { return; }

    artworksService.addComment($scope.artwork._id, $scope.artwork.userId, {
      body: $scope.body,
      author: auth.currentUser().username
    }).success(function(comment) {

      
      console.log('scope artwork', $scope.artwork);
      console.log('recent comment', comment.body);

      $scope.artwork.comments.push(comment);


    });

    $scope.body = '';
  };

  // $scope.mailLink = "mailto:" + $scope.emailId + "?subject=" + $scope.Subject + '&body=' + $scope.bodyText;
  // $scope.mailLink = "mailto:" + $scope.currentUsermail + "?subject=" + $scope.Subject + '&body=' + $scope.bodyText;

}]);