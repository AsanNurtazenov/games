import React, { useState } from "react";
import shuffle from "../GameTable/utils/shuffle";
import generateSequence from "../GameTable/utils/GenerateSequence";

const Tags = () => {
  const [boardt,setBoardt] = useState([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, ""]
  ]);
  const [board, setBoard] = useState([
    [15, 2, 3, 8],
    [4, 9, 13, 7],
    [10, 5, 6, 12],
    [11, 14, 1, ""]
    
  ]);


  const moveTile = (row, col) => {
    const newBoard = [...board];
    const emptyRow = board.findIndex(row => row.includes(""));
    const emptyCol = board[emptyRow].indexOf("");

    if (
      (row === emptyRow && (col === emptyCol - 1 || col === emptyCol + 1)) ||
      (col === emptyCol && (row === emptyRow - 1 || row === emptyRow + 1))
    ) {
      newBoard[emptyRow][emptyCol] = newBoard[row][col];
      newBoard[row][col] = "";
      setBoard(newBoard);

    }
    
  };

  return (
    <div>
        <section class="has-background-light container is-widescreen has-text-centered">
            <div className="has-text-centered">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", 'margin-left': 'auto',
        'margin-right': 'auto',
        width: '15em' }} class=''>
          {row.map((col, colIndex) => (
            <div
              key={colIndex}
              style={{
                border: "1px solid black",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: col !== "" ? "pointer" : "default"
              }}
              onClick={() => moveTile(rowIndex, colIndex)}
              
            >
              {col}
            </div>
          ))}
        </div>

      ))}
      </div>
      </section>
    </div>
  );
};


export default Tags;