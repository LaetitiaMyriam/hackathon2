var app = angular.module('finalproject', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: 'MainCtrl',
      resolve: {
        usersPromise: ['users', function(users){
          return users.getAll();
        }]
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'auth', function($state, auth){
        if(auth.isLoggedIn()){
          $state.go('home');
        }
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'auth', function($state, auth){
        if(auth.isLoggedIn()){
          $state.go('home');
        }
      }]
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/templates/userProfile.html',
      controller: 'UserProfCtrl',
      resolve: {
        usersPromise: ['users', function(users){
          return users.getAll();
        }]
      }
    })
    .state('artworkpage', {
      url: '/artworkpage/:artId',
      templateUrl: '/templates/artworkPage.html',
      controller: 'artworkCtrl',
      resolve: {
        usersPromise: ['users', function(users){
          return users.getAll();
        }]
      }
    })
   

  // $urlRouterProvider.otherwise('home');
}]);