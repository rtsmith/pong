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

    // define custom url
    return $resource('http://localhost:port/games:ext/:id', 
        // first object sets defaults
        { port: ':3000', ext: '', id: ''},
        // sets method specific values
        {
            get: { 
                method: 'GET',
                ext: '.json',
                isArray: true 
            },
            save: { 
                method: 'POST',
                ext: ''
            },
            remove: { 
                method: 'DELETE',
                id: '@id'
            }
        });
  });
  
