function getCandidates(board, row, col) {
    var candidates = [];
    var collision;

    for (chr = 1; chr <= 9; chr++) {
        collision = false;
        for (i = 0; i < 9; i++) {
            if (Number(board[row][i]) === chr ||
                Number(board[i][col]) === chr ||
                Number(board[(row - row % 3) + Math.floor(i / 3)][(col - col % 3) + i % 3]) === chr) {
                collision = true;
                break;
            }
        }
        if (!collision) { candidates.push(chr) }
    }
    return candidates;
}

function sudokuSolve(board) {
    var row = -1;
    var col = -1;
    var candidates = null;
    var newCandidates = null;
    var solvable = false;

    for (r = 0; r < 9; r++) {
        for (c = 0; c < 9; c++) {
            if (board[r][c] === '.') {
                newCandidates = getCandidates(board, r, c)
            }

            if (candidates === null || newCandidates.size < candidates.size) {

                candidates = newCandidates;
                row = r;
                col = c;
            }
        }
    }

    if (candidates === null) {
        return true
    }

    candidates.forEach(function (val) {
        console.log(val);
        board[row][col] = val;
        console.log(board)
        if (sudokuSolve(board)) {
            solvable = true
        }

        board[row][col] = '.'
    })

    return solvable;
}