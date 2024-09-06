// TODO: 
// - Optimize the handling of the shadow puzzle to further reduce the need for backtracking.
// - Add a feature to handle multiple solutions or verify the uniqueness of the solution.
// - Improve the readability of the code, especially for updating affected cells in the shadow puzzle.
// - Consider adding benchmarks to measure performance improvements with the optimized backtracking and shadow puzzle system.

/**
 * This function checks if a number can be placed in a given row, column, and 3x3 grid of the puzzle.
 * @param {number[][]} puzzle - The Sudoku puzzle grid.
 * @param {number} row - The row index.
 * @param {number} col - The column index.
 * @param {number} num - The number to be placed.
 * @returns {boolean} - Whether the number can be placed or not.
 */
function checking(puzzle, row, col, num) {
    // Check row
    for (let i = 0; i < 9; i++) {
        if (puzzle[row][i] === num) return false;
    }
    // Check column
    for (let i = 0; i < 9; i++) {
        if (puzzle[i][col] === num) return false;
    }
    // Check 3x3 grid
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
 * Updates the shadow puzzle, recalculating possible values for affected cells.
 * @param {number[][]} shadowPuzzle - The shadow puzzle storing possible values for each cell.
 * @param {number[][]} puzzle - The Sudoku puzzle grid.
 * @param {number} row - The row index of the recently updated cell.
 * @param {number} col - The column index of the recently updated cell.
 */
function updateAffectedCells(shadowPuzzle, puzzle, row, col) {
    // Update the affected row, column, and 3x3 grid
    for (let i = 0; i < 9; i++) {
        shadowPuzzle[row][i] = (puzzle[row][i] === 0) ? getPossibleNumbers(puzzle, row, i) : [];
        shadowPuzzle[i][col] = (puzzle[i][col] === 0) ? getPossibleNumbers(puzzle, i, col) : [];
    }
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (puzzle[i][j] === 0) {
                shadowPuzzle[i][j] = getPossibleNumbers(puzzle, i, j);
            }
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
 * Finds the cell with the fewest candidates in the shadow puzzle.
 * @param {number[][][]} shadowPuzzle - The shadow puzzle storing possible values for each cell.
 * @returns {[number, number]} - The row and column index of the most constrained cell.
 */
function findMostConstrainedCell(shadowPuzzle) {
    let minOptions = 10; // Impossible number of candidates
    let bestCell = [-1, -1];

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let options = shadowPuzzle[row][col].length;
            if (options > 0 && options < minOptions) {
                minOptions = options;
                bestCell = [row, col];
            }
        }
    }
    return bestCell;
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
        let [row, col] = findMostConstrainedCell(shadowPuzzle);
        if (row === -1 && col === -1) {
            return true;
        }

        for (let num of shadowPuzzle[row][col]) {
            if (checking(puzzle, row, col, num)) {
                puzzle[row][col] = num;
                updateAffectedCells(shadowPuzzle, puzzle, row, col);
                if (solve()) {
                    return true;
                }
                puzzle[row][col] = 0;
                updateAffectedCells(shadowPuzzle, puzzle, row, col);
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
