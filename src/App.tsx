import { useState } from "react";
import './App.css'
import Board from './Board'
import calculateWinner from './components/calculateWinner'
import DisplayWinner from './components/DisplayWinner'
import RestartButton from './components/RestartButton'

// The main component
export default function App() {
  // State to keep track of the board
  const [board, setBoard] = useState(Array(9).fill(''))

  return <div className="gridWrapper">
    <DisplayWinner winner={calculateWinner(board)}/>
    <Board positions={board} setBoard={setBoard}/>
    <RestartButton setBoard={setBoard}/>
  </div>
}
// End of main component

