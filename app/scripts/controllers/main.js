'use strict';

angular.module('pongApp')

  .controller('MainCtrl', function ($scope, $http, GameResource) {

    // populate games on load
    var Games = GameResource.get( function(response){
        $scope.games = response;
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
            function(){
                console.log("post success!");
                $scope.games.push(game);
            }
            // error callback ..
         );
    };

    // $scope.destroy = function(id) {
    //     $http({
    //         url: 'http://ping2013.herokuapp.com/games/' + id,
    //         method: 'DELETE'
    //   //      success: update()
    //     });
    // }

  });
