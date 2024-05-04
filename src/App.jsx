/* eslint-disable react/prop-types */
import { useState } from 'react'

function Square({value, onSquareClick}){

  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  );    
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [isXNext, setIsXNext] = useState(true);

  function handleClick(i){
    if(squares[i] || calculateWinner(squares)) return;

    const nextSquare = squares.slice();

    nextSquare[i] = isXNext ? 'X' : 'O';

    setSquares(nextSquare);
    setIsXNext(!isXNext);
  }

  const winner = calculateWinner(squares);
  let status = '';

  status = winner ? `Winner: ${winner}` : `Next Player: ${(isXNext ? 'X' : 'O')}`

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
      </div>
    </>
  )
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i=0;i<lines.length;i++){
    const [a, b, c] = lines[i];

    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
      return squares[a];
    }
  }

  return false;
}