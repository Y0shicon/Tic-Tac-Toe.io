import { useState } from "react";
import './App.css'

// The main component
export default function App() {
  // State to keep track of the board
  const [board, setBoard] = useState(Array(9).fill(''))

  return <div className="gridWrapper">
    <DisplayWinner winner={calculateWinner(board)}/>
    <Board positions={board} setBoard={setBoard}/>
  </div>
}
// End of main component

// The square component
function Square(props: any) {
    return <button className="square" onClick={props.onSquareClick}>{props.content}</button>
}
// End of square component

// The board component
function Board(props: any) {

  // State to keep track of whose turn it is
  const [xIsNext, setXIsNext] = useState(true)

  // Function to handle click on a square
  function onClick(index: number) {
    const newBoard = props.positions.slice()

    // If the square is already filled, return
    if (newBoard[index] !== '' || calculateWinner(newBoard)) {
      return
    }

    // If the square is empty, fill it with X or O
    if (xIsNext) {
    newBoard[index] = 'X'}
    else {
      newBoard[index] = 'O'
    }
    // Change the turn
    setXIsNext(!xIsNext)

    // Update the board
    props.setBoard(newBoard)
  }

  const boardGrid = props.positions.map((position: number | string, index: number) => {
    return <Square content={position} key={index} onSquareClick={() => onClick(index)} />}
  )

  return (
    <>
      <div className='gridContainer'>
        {boardGrid}
      </div>
    </>
  )
}
// End of board component

// The winner component
function DisplayWinner(props: any) {
  return <div className="winner">Winner: {props.winner}</div>
}
// End of winner component

// Function to calculate the winner
function calculateWinner(board: any) {
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