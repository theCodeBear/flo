'use strict';

angular.module('flo')

.config(function($stateProvider) {

  $stateProvider

  .state('register', {
    url: '/register',
    templateUrl: 'app/register/register.html',
    controller: 'RegisterCtrl'
  });

});