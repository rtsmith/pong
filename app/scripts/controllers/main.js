'use strict';

angular.module('pongApp')
  .controller('MainCtrl', function ($scope, $http) {

    var host = 'localhost:3000/';

    $scope.add = function() {
        var game = {
            player1: $scope.addPlayer1,
            player2: $scope.addPlayer2,
            score1: $scope.addScore1,
            score2: $scope.addScore2
        }

        $http({
            url: 'http://localhost:3000/games',
            method: 'POST',
            data: game,
            success: update()
        });

        console.log("post: " + game);
    };

    function update() {
        $http.get('http://localhost:3000/games.json').success( function(data) {
          console.log("put: " + data);

          // on get success we pass Game.all into the scope
          $scope.games = data;
        });
    }
    
    update()


  });
