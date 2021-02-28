import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContentText } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const ProgressForm = ({
  id,
  description,
  isDone,
  min,
  max,
  marks,
  useIsDialogOpen,
  defaultValue,
  currentDate,
}) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openOverDone, setOpenOverDone] = useIsDialogOpen();

  const handleClose = () => {
    setOpenOverDone(false);
  };
  const handleAccept = () => {
    console.log({ id, value, isDone, currentDate });
    setOpenOverDone(false);
  };

  return (
    <>
      <Dialog open={openOverDone} onClose={handleClose}>
        <DialogTitle>Выполнение цели</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
          <Slider
            valueLabelDisplay="auto"
            defaultValue={defaultValue}
            step={1}
            marks={marks}
            min={min}
            max={max}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAccept}>Подтвердить</Button>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProgressForm;
