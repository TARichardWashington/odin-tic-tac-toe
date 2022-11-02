var gameboard = (function gameBoard() {
   
    var player1 = { symbol: 'x'};
    var player2 =  { symbol: 'o'};

    var board = [[null, null, null], 
                 [null, null, null], 
                 [null, null, null]];

    return {
        player1Move(x, y) {
            board[y][x] = player1.symbol;
        },
        player2Move(x, y) {
            board[y][x] = player2.symbol;
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
            
            // Check a winner in the horizontal rows
            board.forEach((row) => {
                if(row[0] == 'x' && row[1] == 'x' && row[2] == 'x' ) {
                    console.log('winner');
                }
            });          

            //Check a winner in the virtical columns
            var col1 = false;
            var col2 = false;
            var col3 = false; 
            
            board.forEach((row, index) => {
                if(index === 0) {
                    row[0] != null ? col1 = row[0]: '';
                } else {
                    row[0] != null && col1 != false ? col1 = row[0]: '';
                }

                if(index === 0) {
                    row[1] != null ? col2 = row[1]: '';
                } else {
                    row[1] != null && col2 != false ? col2 = row[1]: '';
                }

                if(index === 0) {
                    row[2] != null ? col3 = row[2]: '';
                } else {
                    row[2] != null && col3 != false ? col3 = row[2]: '';
                }
            });  

            // Check a winner on the diagonals
            if(board[0][0] != null && board[1][1] != null && board[2][2] != null) {
                console.log('winner');
            }
            if(board[0][2] != null && board[1][1] != null && board[2][0] != null) {
                console.log('winner 2');
            }

            return false;
        }
    }})();

gameboard.player1Move(0, 2);
gameboard.player1Move(1, 1);
gameboard.player1Move(2, 0);
gameboard.hasSomeoneWon();

var domBoard = document.querySelector('#board');

gameboard.display(domBoard);

