(function() {
  var app = angular.module('git', []);

  var Mainctrl = function($scope, $http) {
    var oncomplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url).then(onrepos, onerror);
    };
    var onrepos = function(response) {
      $scope.repos = response.data;
    };
    var onerror = function(reason) {
      $scope.error = 'ERROR 404';
    };
    $scope.search = function(username) {
      $http
        .get('https://api.github.com/users/' + $scope.username)
        .then(oncomplete, onerror);
    };

    $scope.reposort = "+name";
  };

  app.controller('Mainctrl', ['$scope', '$http', Mainctrl]);
})();