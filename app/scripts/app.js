'use strict';

angular.module('pongApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
