'use strict';

angular.module('flo')

.config(function($stateProvider) {

  $stateProvider

  .state('floTime', {
    url: '/floTime',
    templateUrl: 'app/floTime/floTime.html',
    controller: 'FloTimeCtrl'
  })

});