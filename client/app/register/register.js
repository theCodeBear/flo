'use strict';

angular.module('flo')

.config(function($stateProvider) {

  $stateProvider

  .state('registerIndividual', {
    url: '/register',
    templateUrl: 'app/register/registerIndividual.html',
    controller: 'RegisterCtrl'
  })

  .state('registerOrganization', {
    url: '/registerOrganization',
    templateUrl: 'app/register/registerOrganization.html',
    controller: 'RegisterCtrl'
  });

});