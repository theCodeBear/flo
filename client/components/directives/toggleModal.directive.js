'use strict';

angular.module('flo')

.directive('toggleModal', function() {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        $(attrs.section).toggle();
        $(attrs.blurid).toggleClass('blur');
      });
    }
  }

});