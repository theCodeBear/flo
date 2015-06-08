'use strict';

angular.module('flo')

.config(function($stateProvider) {

  $stateProvider

  .state('scrumBoard', {
    url: '/scrumBoard',
    templateUrl: 'app/scrum/scrum.html',
    controller: 'ScrumCtrl'
  })

});