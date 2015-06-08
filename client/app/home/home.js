'use strict';

angular.module('flo')

.config(function($stateProvider) {

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'app/home/home.html',
    controller: 'HomeCtrl'
  });

});