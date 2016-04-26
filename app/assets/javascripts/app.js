// app.js

angular.module('flapperNews', ['ui.router', 'templates', 'Devise'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {                   // The name of this "state".
        url: '/home',                    // This is the URL
        templateUrl: 'home/_home.html',  // This template is to be used
        controller: 'MainCtrl',          // This is the assigned controller
        resolve: {
          postPromise: ['posts', function(posts){
            return posts.getAll();
          }]
        }
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl',
        resolve: {
          post: ['$stateParams', 'posts', function($stateParams, posts) {
            return posts.get($stateParams.id);
          }]
        }

      });

      $urlRouterProvider.otherwise('home');
  }
]);
