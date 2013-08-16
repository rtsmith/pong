'use strict';

angular.module('pongApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.add = function() {
        var game = {
            player1: $scope.addPlayer1,
            player2: $scope.addPlayer2,
            score1: $scope.addScore1,
            score2: $scope.addScore2
        }

        $http({
            url: 'http://ping2013.herokuapp.com/games',
            method: 'POST',
            data: game,
            success: update()
        });

        console.log("post: " + game);
    };

    $scope.destroy = function(id) {
        $http({
            url: 'http://ping2013.herokuapp.com/games/' + id,
            method: 'DELETE',
            success: update()
        });
    }

    function update() {
        $http.get('http://ping2013.herokuapp.com/games.json').success( function(data) {
          console.log("put: " + data);

          // on get success we pass Game.all into the scope
          $scope.games = data;
        });
    }
    
    update()


  });
