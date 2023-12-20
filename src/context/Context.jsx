import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  //The winner positions
  const winnerPos = [
    [0, 3, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //To verify the current turn
  const [turn, setTurn] = useState({
    x: true,
    o: false,
  });

  //To verify the current turn
  const [winner, setWinner] = useState(null);

  //To verify in which space each user is.
  const [board, setBoard] = useState(new Array(9).fill(null));

  //To reset the board;
  const [reset, setReset] = useState(false);

  //To handle which user has won.
  const handleWinner = (positions) => {
    let boardPositions = board;

    boardPositions[positions] = turn.x ? 'X' : 'O';

    setBoard(boardPositions);

    for (const mix of winnerPos) {
      const [a, b, c] = mix;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);

        break;
      }
    }
  };

  return (
    <Context.Provider
      value={{
        winnerPos,
        turn,
        setTurn,
        handleWinner,
        board,
        setBoard,
        winner,
        setWinner,
        reset,
        setReset,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const UseContext = () => useContext(Context);
