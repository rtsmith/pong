'use strict';

angular.module('pongApp')
  .controller('MainCtrl', function ($scope, $http) {

    var host = 'localhost:3000/';

    $http.get('http://localhost:3000/games.json').success( function(data) {
      console.log(data);
      $scope.games = data;
    });


  });
