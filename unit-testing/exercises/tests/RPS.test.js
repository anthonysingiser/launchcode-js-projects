const whoWon = require('../RPS.js');

describe("whoWon", function(){
      
    test("should return a tie when both players choose the same option.", function(){
        let output = whoWon('rock', 'rock');
        expect(output).toBe('TIE!');
    });

    test("should return 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });

     test("should return 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });

})