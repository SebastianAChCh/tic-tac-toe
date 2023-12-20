import React, { useState, useEffect } from 'react';
import { UseContext } from '../context/Context';
import Square from './Square';

const Button = ({ position }) => {
  const context = UseContext();
  const [isClicked, setIsClicked] = useState(false);
  const [currentTurn, setCurrentTurn] = useState('');

  useEffect(() => {
    if (context.reset) {
      setCurrentTurn('');
      setIsClicked(false);
    }
  }, [context.reset]);

  const handleClick = () => {
    setIsClicked(true);

    setCurrentTurn(context.turn.x ? 'X' : 'O');

    context.setTurn({
      x: !context.turn.x,
      o: !context.turn.o,
    });

    context.handleWinner(position);
  };

  return (
    <>
      <Square
        winner={context.winner}
        position={position}
        isClicked={isClicked}
        handleClick={handleClick}
        currentTurn={currentTurn}
      />
    </>
  );
};

export default Button;
