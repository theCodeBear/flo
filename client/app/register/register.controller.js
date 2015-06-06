'use strict';

angular.module('flo')

.controller('RegisterCtrl', function($scope, $location) {

  $scope.user = {};
  $scope.organization = {}
  $scope.user.email = $location.search().email;
  $scope.organization.sizeTier = $location.search().size;
  $location.url($location.path());


  $scope.register = function(user) {
    console.log(user);
  };

});