'use strict';

angular.module('flo')

.controller('UserCtrl', function($scope, User) {

  User.getUserNames().then(function(userArray) {
    $scope.userIndex = userArray;
  });

});
