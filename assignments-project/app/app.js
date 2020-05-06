'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/home', {
        template: '<users-list></users-list>'
      }).
      when('/assignment-1', {
        template: '<dir></dir>'
      }).
      when('/assignment-2', {
        template: '<country-page></country-page>'
      }).
      when('/assignment-3', {
        template: '<assignment-3></assignment-3>'
      }).
      when('/assignment-4-5', {
        template: '<template-register></template-register>'
      }).
      when('/assignment-6', {
        template: '<dummy-list></dummy-list>'
      }).
      when('/assignment-7', {
        template: '<piping></piping>'
      }).
      when('/assignment-8', {
        template: '<thank-you></thank-you>'
      }).
      otherwise('/home');

  }]);
