'use strict';

angular.module('flo')

.controller('RegisterCtrl', function($scope, $location) {

  $scope.user = {};
  $scope.user.email = $location.search().email;
  $location.url($location.path());

  $scope.register = function(user) {
    console.log(user);
  };

});