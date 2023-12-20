import React, { useEffect } from 'react';
import Squares from './components/Squares';
import Turn from './components/Turn';
import { UseContext } from './context/Context';
import Dialogs from './components/Dialogs';

const App = () => {
  const { board, setReset, reset, setTurn } = UseContext();

  useEffect(() => {
    setTimeout(() => {
      if (reset) {
        setReset(false);
        setTurn({
          x: true,
          o: false,
        });
      }
    }, 1000);
  }, [reset]);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-6">
      <Dialogs />
      <Turn />
      <div className="w-1/2 grid grid-cols-3 gap-1">
        {board.map((_, i) => (
          <Squares key={i} position={i} />
        ))}
      </div>
    </div>
  );
};

export default App;
