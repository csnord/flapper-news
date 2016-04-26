// var app = angular.module('flapperNews', ['ui.router', 'templates']);
// app.controller('MainCtrl', [

angular.module('flapperNews')
.controller('MainCtrl', [
  '$scope',
  'posts',                      // Here we are placing the "posts" service
  function($scope, posts){      // into the MainCtrl controller and
    $scope.posts = posts.posts; // we place it in scope.
    $scope.incrementUpvotes = function(post) { post.upvotes += 1; };
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      posts.create({
        title: $scope.title,
        link: $scope.link
      });
      $scope.title = '';
      $scope.link = '';
    };
}]);
