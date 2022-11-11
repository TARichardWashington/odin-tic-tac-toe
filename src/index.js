import gameboard from "./gameboard.js";
import './reset.css';
import './styles.css';

/* Random game simulator - function
 * 
 * 
 * 
 */

function simulator(whoGoesFirst) {
    var count = 9;

    var turn = whoGoesFirst;

    while(!gameboard.hasSomeoneWon() && count != 0) {

        while(true) {
            let moveX = randomIntFromInterval(0, 2);
            let moveY = randomIntFromInterval(0, 2);

            if(turn === 1) {
                if(gameboard.player2Move(moveX, moveY)) {
                    console.log('Player 1 moved ' + moveX + moveY);
                    turn = 0;
                    break;
                }
            } else {
                if(gameboard.player1Move(moveX, moveY)) {
                    console.log('Player 2 moved ' + moveX + moveY);
                    turn = 1;
                    break;
                }
            }
        }

        count--;
        console.log('Turns left ' + count);
    }

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    var winner = gameboard.hasSomeoneWon();

    console.log(winner ? 'Player ' + winner + ' won!' : 'Draw');
};

//simulator(1);



var domBoard = document.querySelector('#board');

gameboard.display(domBoard);

var cells = document.querySelectorAll('.cell');
var winner = document.querySelector('#winner');

var playerTurn = 1;

cells.forEach(cell => { cell.addEventListener('click', function() {
    console.log('Cell ' + this.dataset.x + this.dataset.y + ' chosen');
    if(playerTurn === 1) {
        playerTurn = 2;
        gameboard.player1Move(this.dataset.x, this.dataset.y);
    } else {
        gameboard.player2Move(this.dataset.x, this.dataset.y);
        playerTurn = 1;
    }
    gameboard.display(domBoard);

    var hasWinner = gameboard.hasSomeoneWon();
    
    if(hasWinner) {
       winner.textContent = hasWinner + ' is the winner!';
    }
}) });