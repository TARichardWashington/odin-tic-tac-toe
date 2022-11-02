var gameboard = (function gameBoard() {
   
    var player1 = { symbol: 'x'};
    var player2 =  { symbol: 'o'};

    var board = [[null, null, null], 
                 [null, null, null], 
                 [null, null, null]];

    return {
        checkPosition(x, y) {
            return board[y][x] == null
        },
        player1Move(x, y) {
            if(this.checkPosition(x, y)) {
                board[y][x] = player1.symbol;
                return true;
            } else {
                return false;
            }

        },
        player2Move(x, y) {
            if(this.checkPosition(x, y)) {
                board[y][x] = player2.symbol;
                return true;
            } else {
                return false;
            }
            
        },
        display(domElement) {                    
            let table = document.createElement("table");
            
            for(let x = 0; x < 3; x++) {
                let row = document.createElement('tr');

                for(let y = 0; y < 3; y++) {
                    let data = document.createElement('td');                    
                    row.append(data);

                    data.innerText = board[x][y] ? board[x][y] : '-';
                }   

                table.append(row);
            }

            domElement.append(table);
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

/* 
 * Gameboard
 * 
 * CheckPosition()
 * player1Move()
 * player2Move()
 * hasSomeoneOne()
 * resetBoard()
 */

var count = 9;

while(!gameboard.hasSomeoneWon()) {
    let moveX = randomIntFromInterval(0, 2);
    let moveY = randomIntFromInterval(0, 2);

    while(true) {
        let moveX = randomIntFromInterval(0, 2);
        let moveY = randomIntFromInterval(0, 2);

        if(gameboard.player1Move(moveX, moveY)) {
            console.log('Moved' + moveX + moveY);
            break;
        }
    }

    count--;
    console.log(count);
    if(count == 0) {
        break;
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

console.log(gameboard.hasSomeoneWon());


var domBoard = document.querySelector('#board');

gameboard.display(domBoard);