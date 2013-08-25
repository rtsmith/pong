'use strict';

angular.module('pongApp', ['ngResource'])
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
  .factory('GameResource', function($resource) {

    return $resource('http://localhost:port/games:ext', {port: ':3000', ext: ''},{
        get: { method: 'GET', ext: '.json', isArray: true },
        save: { method: 'POST', ext: '' }
        });

  });
  
