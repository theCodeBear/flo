'use strict';

angular.module('flo')

.directive('floLandingball', function() {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        if (!scope.menuOpen) {
          scope.menuOpen = true;
          $('#aboutBall').animate({top: '120px', 'z-index': '98'});
          $('#faqBall').animate({top: '220px', 'z-index': '98'});
          $('#contactBall').animate({top: '320px', 'z-index': '98'});
        } else {
          scope.menuOpen = false;
          $('#homeBall').animate({top: '20px', 'z-index': '1'});
          $('#aboutBall').animate({top: '20px', 'z-index': '1'});
          $('#faqBall').animate({top: '20px', 'z-index': '1'});
          $('#contactBall').animate({top: '20px', 'z-index': '1'});
        }
      });
    }
  };

})


.directive('floDashball', function() {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        if (!scope.menuOpen) {
          scope.menuOpen = true;
          // $('#overviewBall').toggle();
          $('#overviewBall').animate({top: '120px', 'z-index': '98'});
          // $('#scrumBall').toggle();
          $('#scrumBall').animate({top: '220px', 'z-index': '98'});
          // $('#scheduleBall').toggle();
          $('#scheduleBall').animate({top: '320px', 'z-index': '98'});
          // $('#chatBall').toggle();
          $('#chatBall').animate({top: '420px', 'z-index': '98'});
          // $('#chartBall').toggle();
          $('#chartBall').animate({top: '520px', 'z-index': '98'});
        } else {
          scope.menuOpen = false;
          // $('#overviewBall').toggle();
          $('#overviewBall').animate({top: '20px', 'z-index': '1'});
          // $('#scrumBall').toggle();
          $('#scrumBall').animate({top: '20px', 'z-index': '1'});
          // $('#scheduleBall').toggle();
          $('#scheduleBall').animate({top: '20px', 'z-index': '1'});
          // $('#chatBall').toggle();
          $('#chatBall').animate({top: '20px', 'z-index': '1'});
          // $('#chartBall').toggle();
          $('#chartBall').animate({top: '20px', 'z-index': '1'});
        }
      });
    }
  };

})

.directive('loginButton', function() {

  return {
    restrict: 'A',
    // replace: true,
    // template: "<div><div id='loginForm'><input type='email' class='loginInputs' placeholder='Email'><input type='password' class='loginInputs' placeholder='Password'><button type='submit' class='btn btn-default loginInputs'>Login</button></div><button id='loginBall' login-button class='ball thinFont'  data-toggle='tooltip' data-placement='left' title='Login'><i class='fa fa-sign-in fa-lg'></i></button></div>"
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        $('#loginForm').toggle('display');
        // if ($('#loginForm').attr('top', '-100px')) {
        //   $('#loginForm').animate({top: '0px'});
        // } else {
        //   $('#loginForm').animate({top: '100px'});
        // }
      });
    }
  };

});