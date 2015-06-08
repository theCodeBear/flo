'use strict';

angular.module('flo')

.controller('RegisterCtrl', function($scope, $location, $state, User) {

  $scope.user = {};
  $scope.organization = {}
  $scope.user.email = $location.search().email;
  $scope.organization.sizeTier = $location.search().size;
  $location.url($location.path());


  $scope.registerUser = function() {
    User.create($scope.user).then(function(data) {
      console.log(data);
      $state.go('home');
    }).catch(function(err) {
      console.log('err', err);
    });
  };

  $scope.registerOrganization = function() {
    $state.go('home');
  };

});