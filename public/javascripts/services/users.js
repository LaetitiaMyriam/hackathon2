app.factory('users', ['$http', 'auth', function ($http, auth){ 
  var userService = {
    users: [],

    getAll: function() {
      return $http.get('/users').then(function(data) {
  
        angular.copy(data.data, userService.users);
      });
    },

    addArtToDb: function(id, artwork) {
      console.log("hello");
      console.log(id);
      console.log(artwork);

      var data = {id: id, artwork: artwork};

      return $http.post('/users' , data);
    }
  }

  return userService;

}]);

