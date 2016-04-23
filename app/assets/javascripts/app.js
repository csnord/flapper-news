// app.js
// We are adding an external module, so including 'ui.router' as a dependency.
var app = angular.module('flapperNews', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {               // The name of this "state".
        url: '/home',                // This is the URL
        templateUrl: '/home.html',   // This template is to be used
        controller: 'MainCtrl'       // This is the assigned controller
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      });

      $urlRouterProvider.otherwise('home');
  }
]);


// Create a service
app.factory('posts', [function(){
  var o = { posts:[] };
  return o;
}]);

app.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){
    $scope.post = posts.posts[$stateParams.id];   //For now the index of the post is theid.
    $scope.addComment = function(){
      if($scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    };
  }
]);

app.controller('MainCtrl', [
  '$scope',
  'posts',                      // Here we are placing the "posts" service
  function($scope, posts){      // into the MainCtrl controller and
    $scope.posts = posts.posts; // we place it in scope.
    $scope.incrementUpvotes = function(post) { post.upvotes += 1; };
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0,
          comments: [
            {author: 'Joe', body: 'Cool post!', upvotes: 0},
            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
          ]
        });
      $scope.title = '';
      $scope.link = '';
    };
}]);
