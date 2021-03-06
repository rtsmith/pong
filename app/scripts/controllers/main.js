'use strict';

angular.module('pongApp')

  .controller('MainCtrl', function ($scope, $http, GameResource) {

    // initialize the games scope
    $scope.games = [];

    // populate games on load
    var Games = GameResource.get( function(response){
        $scope.games = response;
        console.log(response);
    });

    // define a function to post a result
    $scope.postGame = function() {
        // value of inputs at call
        var game = {
             player1: $scope.addPlayer1,
             player2: $scope.addPlayer2,
             score1: $scope.addScore1,
             score2: $scope.addScore2
        }
        GameResource.save(
            // post data ..
            game,
            // success callback ..
            function(response){
                console.log("post success!");
                $scope.games.push(response);
            }
            // error callback ..
         );
    };

    $scope.destroy = function(game, index){
        console.log(game);
        console.log(index);
        game.$remove({id: game.id}, function(){
            console.log("delete successful!");
            // remove that game from the games array
            $scope.games.splice(index, 1);
        });
    };

  });
