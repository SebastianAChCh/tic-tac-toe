import React from 'react';
import { UseContext } from '../context/Context';

const Turn = () => {
  const context = UseContext();
  return (
    <div
      className="bg-blue-500 px-5 py-2 rounded-md
    "
    >
      <h1 className="text-3xl text-white m-0 p-0">
        {context.turn.x ? 'X' : 'O'}
      </h1>
    </div>
  );
};

export default Turn;
