import "./App.css";
import { useState } from "react";
import Square from "./Square";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState(true);

  const handleReset = () => {
    setSquares(Array(9).fill(""));
    setPlayer(true);
  };

  function calculateWinner(squares) {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < patterns.length; i++) {
      const [a, b, c] = patterns[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return `${squares[a]} won!`;
      }
    }
    return "Who will win?";
  }

  return (
    <div className="App">
      <div className="container">
        {squares.map((square, index) => {
          return (
            <Square
              key={index}
              squares={squares}
              setSquares={setSquares}
              index={index}
              squareValue={square}
              player={player}
              setPlayer={setPlayer}
            />
          );
        })}
      </div>
      <span>{calculateWinner(squares)}</span>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
