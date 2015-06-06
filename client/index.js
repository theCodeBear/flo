'use strict';

angular.module('flo', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

});
