import React from 'react';

const Square = ({ handleClick, isClicked, winner, position, currentTurn }) => {
  return (
    <div className="h-36 flex justify-center items-center border border-blue-500 rounded-xl">
      <button
        position={position}
        className="h-full w-full"
        onClick={handleClick}
        disabled={isClicked || winner}
      >
        {isClicked && (
          <span className="text-7xl text-blue-400">{currentTurn}</span>
        )}
      </button>
    </div>
  );
};

export default Square;
