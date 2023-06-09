import { useState } from "react";
import './App.css'
import calculateWinner from "./components/calculateWinner";
import Square from "./components/Square";

// The board component
export default function Board(props: any) {

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

