/* 
 * Gameboard - module singleton
 * 
 * CheckPosition()
 * player1Move()
 * player2Move()
 * hasSomeoneOne()
 * resetBoard()
 */

export default (function gameBoard() {
   
    var player1 = { symbol: 'x'};
    var player2 =  { symbol: 'o'};

    var finished = false;

    var board = [[null, null, null], 
                 [null, null, null], 
                 [null, null, null]];

    return {
        checkPosition(x, y) {
            return board[y][x] == null
        },
        player1Move(x, y) {
            if(this.checkPosition(x, y) && finished === false) {
                board[y][x] = player1.symbol;
                return true;
            } else {
                return false;
            }

        },
        player2Move(x, y) {
            if(this.checkPosition(x, y) && finished === false) {
                board[y][x] = player2.symbol;
                return true;
            } else {
                return false;
            }
            
        },
        display(domElement) {  
            if(domElement && !domElement.hasChildNodes()) { 
                for(let x = 0; x < 3; x++) {
                    for(let y = 0; y < 3; y++) {
                        let cell = document.createElement('div'); 
                        cell.setAttribute('class', 'cell');  
                        cell.setAttribute('data-x', x);
                        cell.setAttribute('data-y', y)                 
                        domElement.append(cell);
    
                        cell.innerText = board[y][x] ? board[y][x] : '-';
                    }   
                }   
            } else {
                var cells = domElement.childNodes;

                cells.forEach(cell => {
                    let x = cell.dataset.x;
                    let y = cell.dataset.y;

                    cell.innerText = board[y][x] ? board[y][x] : '-';
                });
            }                     
        }, 
        hasSomeoneWon() {
            var whoWon = false;
            
            // Check a winner in the horizontal rows
            board.forEach((row) => {
                if(row[0] != null && row[1] != null && row[2] != null) {
                    if(row[0] == row[1] && row[0] == row[2]) {
                        whoWon = row[0];
                    }
                    
                }
            });          

            //Check a winner in the virtical columns
            var col1 = false;
            var col2 = false;
            var col3 = false; 
            
            board.forEach((row, index) => {
                if(index === 0) {
                    if(row[0] != null) {
                        col1 = row[0];
                    }
                }

                if(row[0] != col1 || row[0] == false) {
                    col1 = false;
                }

                if(index === 0) {
                    if(row[1] != null) {
                        col2 = row[1];
                    }
                }

                if(row[1] != col2 || row[1] == false) {
                    col2 = false;
                }

                if(index === 0) {
                    if(row[2] != null) {
                        col3 = row[2];
                    }
                }

                if(row[2] != col3 || row[2] == false) {
                    col3 = false;
                }
            }); 
            
            if(col1 != false) {
                whoWon = col1;
            }

            if(col2 != false) {
                whoWon = col2;
            }

            if(col3 != false) {
                whoWon = col3;
            }

            // Check a winner on the diagonals
            if(board[0][0] != null && board[1][1] != null && board[2][2] != null) {
                if(board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
                    whoWon = board[0][0];
                }

            }
            if(board[0][2] != null && board[1][1] != null && board[2][0] != null) {
                if(board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
                    whoWon = board[0][2];
                }
            }

            if(whoWon) {
                finished = true;
            }

            return whoWon;
        }, 
        resetBoard() {
            for(let i = 0; i < board.length; i++) {
                for(let n = 0; n < board[i].length; n++) {
                    board[i][n] = null;
                }
            }
        }
    }})();

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
