"use client";

import Square from "./Square";

const Board = ({squares, xIsNext, onPlay}) => {
  
  const handleClick = (i) => {
    const nextSquares = [...squares];

    if (nextSquares[i] || winner) {
      return;
    }

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares)
  };



  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          return  squares[a]
        }
    }

    return null

  };

  let status;

  const winner = calculateWinner(squares)

  if(winner){
    status = "Winner: " + winner
  } else {
    status = xIsNext ? "Next Player: X" : "Next Player: O";
  }

  return (
    <div className="w-[340px] h-[340px]">
      <h1 className="pb-4">{status}</h1>
      <div className="flex h-1/3">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex h-1/3">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex h-1/3">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
