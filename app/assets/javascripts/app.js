// app.js
// We are adding an external module, so including 'ui.router' as a dependency.
// var app = angular.module('flapperNews', ['ui.router', 'templates']);

angular.module('flapperNews', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {                   // The name of this "state".
        url: '/home',                    // This is the URL
        templateUrl: 'home/_home.html',  // This template is to be used
        controller: 'MainCtrl'           // This is the assigned controller
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl'
      });

      $urlRouterProvider.otherwise('home');
  }
]);

