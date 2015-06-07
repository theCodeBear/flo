'use strict';

angular.module('flo')

.config(function($stateProvider) {

  $stateProvider

  .state('dashboard', {
    url: '/dashboard',
    // abstract: true,
    templateUrl: 'app/dashboard/dashboard.html',
    controller: 'DashCtrl'
  })

});