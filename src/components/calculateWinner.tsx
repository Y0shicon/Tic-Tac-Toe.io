import '../App.css'

// Function to calculate the winner
export default function calculateWinner(board: any) {
  // All possible winning combinations
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ]

  // Loop through all the winning combinations
  for (let i = 0; i < winningCombinations.length; i++) {
    // Get the three indexes of the current winning combination
    const [a, b, c] = winningCombinations[i]

    // If all three squares have the same value, return the value
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  // If none of array elements are empty strings, then draw
  if (!board.includes('')) {
    return 'Draw'
  }

  // If no one has won, return null
  return null
}
// End of function to calculate the winner