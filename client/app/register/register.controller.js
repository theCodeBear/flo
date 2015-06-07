'use strict';

angular.module('flo')

.controller('RegisterCtrl', function($scope, $location, $state) {

  $scope.user = {};
  $scope.organization = {}
  $scope.user.email = $location.search().email;
  $scope.organization.sizeTier = $location.search().size;
  $location.url($location.path());


  $scope.registerUser = function() {
    $state.go('dashboard');
  };

  $scope.registerOrganization = function() {
    $state.go('dashboard');
  };

});