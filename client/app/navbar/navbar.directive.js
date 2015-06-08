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

.directive('userBall', function() {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        if (!scope.userMenuOpen) {
          scope.userMenuOpen = true;
          $('#accountBall').animate({top: '100px', 'z-index': '98'});
          $('#settingsBall').animate({top: '170px', 'z-index': '98'});
          $('#organizationsBall').animate({top: '240px', 'z-index': '98'});
        } else {
          scope.userMenuOpen = false;
          $('#accountBall').animate({top: '30px', 'z-index': '1'});
          $('#settingsBall').animate({top: '30px', 'z-index': '1'});
          $('#organizationsBall').animate({top: '30px', 'z-index': '1'});
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