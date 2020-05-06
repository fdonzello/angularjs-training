'use strict';

angular.module('myApp.repeat', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/repeat', {
      templateUrl: 'repeat/repeat.html',
      controller: 'ExamsController'
    });
  }])

  .controller('ExamsController', ['$scope', function ($scope) {
    $scope.data = {
      exams: ["a", "b"]
    };
  }]);