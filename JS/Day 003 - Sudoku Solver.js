// TODO: 
// - Implement more aggressive shadow elimination using "naked single" and "hidden single" strategies.
// - Continue to optimize the shadow puzzle to reduce the use of backtracking.

/**
 * This function checks if a number can be placed in a given row, column, and 3x3 grid of the puzzle.
 * @param {number[][]} puzzle - The Sudoku puzzle grid.
 * @param {number} row - The row index.
 * @param {number} col - The column index.
 * @param {number} num - The number to be placed.
 * @returns {boolean} - Whether the number can be placed or not.
 */
function checking(puzzle, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (puzzle[row][i] === num || puzzle[i][col] === num) return false;
    }
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (puzzle[i][j] === num) return false;
        }
    }
    return true;
}

/**
 * Updates the shadow puzzle by recalculating possible values for affected cells when a number is placed.
 * @param {number[][]} puzzle - The Sudoku puzzle grid.
 * @param {number[][][]} shadowPuzzle - The shadow puzzle storing possible values for each cell.
 * @param {number} row - The row index of the updated cell.
 * @param {number} col - The column index of the updated cell.
 * @param {number} num - The number placed in the cell.
 */
function eliminateShadow(puzzle, shadowPuzzle, row, col, num) {
    // Eliminate possibilities in the row, column, and 3x3 grid
    for (let i = 0; i < 9; i++) {
        shadowPuzzle[row][i] = shadowPuzzle[row][i].filter(x => x !== num);
        shadowPuzzle[i][col] = shadowPuzzle[i][col].filter(x => x !== num);
    }
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            shadowPuzzle[i][j] = shadowPuzzle[i][j].filter(x => x !== num);
        }
    }
}

/**
 * Gets all possible numbers for a specific cell in the puzzle.
 * @param {number[][]} puzzle - The Sudoku puzzle grid.
 * @param {number} row - The row index.
 * @param {number} col - The column index.
 * @returns {number[]} - An array of possible numbers for the cell.
 */
function getPossibleNumbers(puzzle, row, col) {
    let possibilities = [];
    for (let num = 1; num <= 9; num++) {
        if (checking(puzzle, row, col, num)) {
            possibilities.push(num);
        }
    }
    return possibilities;
}

/**
 * Finds the cell with the fewest possible numbers (most constrained) in the shadow puzzle.
 * @param {number[][][]} shadowPuzzle - The shadow puzzle storing possible values for each cell.
 * @returns {[number, number]} - The row and column of the most constrained cell, or [-1, -1] if no empty cells remain.
 */
function findMostConstrainedCell(shadowPuzzle) {
    let minPossibilities = 10; // More than the maximum number of possibilities (which is 9)
    let selectedRow = -1;
    let selectedCol = -1;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (shadowPuzzle[row][col].length > 0 && shadowPuzzle[row][col].length < minPossibilities) {
                minPossibilities = shadowPuzzle[row][col].length;
                selectedRow = row;
                selectedCol = col;
            }
        }
    }

    return [selectedRow, selectedCol];
}

/**
 * Implements the naked single strategy.
 * If a cell has only one possibility, we place it.
 * @param {number[][]} puzzle - The Sudoku puzzle grid.
 * @param {number[][][]} shadowPuzzle - The shadow puzzle storing possible values for each cell.
 * @returns {boolean} - Whether any naked singles were found and processed.
 */
function nakedSingle(puzzle, shadowPuzzle) {
    let progress = false;
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (puzzle[row][col] === 0 && shadowPuzzle[row][col].length === 1) {
                puzzle[row][col] = shadowPuzzle[row][col][0];
                eliminateShadow(puzzle, shadowPuzzle, row, col, puzzle[row][col]);
                progress = true;
            }
        }
    }
    return progress;
}

/**
 * Implements the hidden single strategy.
 * If a number can only fit in one place in a row, column, or 3x3 grid, we place it.
 * @param {number[][]} puzzle - The Sudoku puzzle grid.
 * @param {number[][][]} shadowPuzzle - The shadow puzzle storing possible values for each cell.
 * @returns {boolean} - Whether any hidden singles were found and processed.
 */
function hiddenSingle(puzzle, shadowPuzzle) {
    let progress = false;

    // Check rows
    for (let row = 0; row < 9; row++) {
        for (let num = 1; num <= 9; num++) {
            let possibleCols = [];
            for (let col = 0; col < 9; col++) {
                if (shadowPuzzle[row][col].includes(num)) {
                    possibleCols.push(col);
                }
            }
            if (possibleCols.length === 1 && puzzle[row][possibleCols[0]] === 0) {
                puzzle[row][possibleCols[0]] = num;
                eliminateShadow(puzzle, shadowPuzzle, row, possibleCols[0], num);
                progress = true;
            }
        }
    }

    // Check columns
    for (let col = 0; col < 9; col++) {
        for (let num = 1; num <= 9; num++) {
            let possibleRows = [];
            for (let row = 0; row < 9; row++) {
                if (shadowPuzzle[row][col].includes(num)) {
                    possibleRows.push(row);
                }
            }
            if (possibleRows.length === 1 && puzzle[possibleRows[0]][col] === 0) {
                puzzle[possibleRows[0]][col] = num;
                eliminateShadow(puzzle, shadowPuzzle, possibleRows[0], col, num);
                progress = true;
            }
        }
    }

    // Check 3x3 grids
    for (let gridRow = 0; gridRow < 3; gridRow++) {
        for (let gridCol = 0; gridCol < 3; gridCol++) {
            for (let num = 1; num <= 9; num++) {
                let possibleCells = [];
                for (let row = gridRow * 3; row < gridRow * 3 + 3; row++) {
                    for (let col = gridCol * 3; col < gridCol * 3 + 3; col++) {
                        if (shadowPuzzle[row][col].includes(num)) {
                            possibleCells.push([row, col]);
                        }
                    }
                }
                if (possibleCells.length === 1 && puzzle[possibleCells[0][0]][possibleCells[0][1]] === 0) {
                    puzzle[possibleCells[0][0]][possibleCells[0][1]] = num;
                    eliminateShadow(puzzle, shadowPuzzle, possibleCells[0][0], possibleCells[0][1], num);
                    progress = true;
                }
            }
        }
    }

    return progress;
}

/**
 * Solves the Sudoku puzzle using backtracking and shadow puzzle optimization.
 * @param {number[][]} puzzle - The Sudoku puzzle grid.
 * @returns {number[][]} - The solved puzzle.
 */
function sudoku(puzzle) {
    let shadowPuzzle = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => []));

    // Populate initial shadow puzzle
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (puzzle[row][col] === 0) {
                shadowPuzzle[row][col] = getPossibleNumbers(puzzle, row, col);
            }
        }
    }

    function solve() {
        while (nakedSingle(puzzle, shadowPuzzle) || hiddenSingle(puzzle, shadowPuzzle)) {
            // Keep processing naked and hidden singles until no more progress can be made
        }

        let [row, col] = findMostConstrainedCell(shadowPuzzle);
        if (row === -1 && col === -1) {
            return true; // Puzzle solved
        }

        for (let num of shadowPuzzle[row][col]) {
            if (checking(puzzle, row, col, num)) {
                puzzle[row][col] = num;
                eliminateShadow(puzzle, shadowPuzzle, row, col, num); // Eliminate possibilities
                if (solve()) {
                    return true;
                }
                puzzle[row][col] = 0;
            }
        }
        return false;
    }

    solve();
    return puzzle;
}

// Test case
let data = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log(sudoku(data));
