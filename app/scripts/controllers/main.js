'use strict';

angular.module('pongApp')
  .controller('MainCtrl', function ($scope, $http) {

    var host = 'localhost:3000/';

    $http.get('http://localhost:3000/games.json').success( function(data) {
      console.log(data);
      $scope.games = data;
    });

    $http({
        url: 'http://localhost:3000/games',
        method: 'POST',
        data: {
            player1: "Jimmy the Kid",
            player2: "Butch Cassideyeyeyey"
        }
    });


  });
