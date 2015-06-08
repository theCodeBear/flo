'use strict';

angular.module('flo')

.config(function($stateProvider) {

  $stateProvider

  .state('floCharts', {
    url: '/floCharts',
    templateUrl: 'app/floCharts/floCharts.html',
    controller: 'FloChartsCtrl'
  })

});