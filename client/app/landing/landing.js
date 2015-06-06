'use strict';

angular.module('flo')

.config(function($stateProvider) {

  $stateProvider

  .state('landing', {
    url: '/',
    templateUrl: 'app/landing/landing.html'
  });

});
