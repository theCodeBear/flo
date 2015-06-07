'use strict';

angular.module('flo')

.config(function($stateProvider) {

  $stateProvider

  .state('landing', {
    url: '/',
    templateUrl: 'app/landing/landing.html',
    controller: 'LandingCtrl'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'app/landing/about/about.html'
  })

  .state('faq', {
    url: '/faq',
    templateUrl: 'app/landing/faq/faq.html'
  })

  .state('help', {
    url: '/help',
    templateUrl: 'app/landing/help/help.html'
  })

});
