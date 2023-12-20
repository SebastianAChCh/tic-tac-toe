import { UseContext } from '../context/Context';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from 'react';

const Dialogs = () => {
  const { winner, setWinner, setReset, setBoard } = UseContext();
  const [openClose, setOpenClose] = useState(Boolean(winner));

  useEffect(() => setOpenClose(Boolean(winner)), [winner]);

  const handleClose = () => {
    setOpenClose(false);
    setWinner(null);
    setReset(true);
    setBoard(new Array(9).fill(null));
  };

  return (
    <>
      <Dialog open={openClose} onClose={handleClose}>
        <DialogTitle>
          <h1 className="text-9xl text-slate-700">Winner</h1>
        </DialogTitle>
        <DialogContent className="text-center text-8xl text-blue-500">
          {winner}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dialogs;
