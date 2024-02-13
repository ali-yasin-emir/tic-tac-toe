"use client"

import { useState } from "react"
import Board from "./Board"

const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)

    // const [xIsNext, setXIsNext] = useState(true)\
    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]

    const handlePlay = (nextSquares) => {

        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]

        setHistory(nextHistory)
        // setXIsNext(!xIsNext)
        setCurrentMove(nextHistory.length - 1)
    }

    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove)
        // setXIsNext(!xIsNext)
    }

    const moves = history.map((squares, move) => {

        let description;
        let className;
        if(move > 0){
            description = "Go to move #" + move
            className = 'border-[1px] border-black hover:bg-black hover:text-white'

        } else{
            description = "Start the game"
            className = 'mb-2'
        }
        
    

        return (
            <span onClick={()=> jumpTo(move)} key={move} className={`${className} cursor-pointer`}>
                {description}
            </span>
        )
    } 

 
     )



  return (
    <div className="flex gap-12 bg-slate-300 p-24 rounded-xl shadow-xl">
        <Board onPlay={(nextSquares) => handlePlay(nextSquares)} squares={currentSquares} xIsNext={xIsNext}/>
        <div className="flex flex-col gap-2">
            {moves}
        </div>
    </div>
  )
}

export default Game