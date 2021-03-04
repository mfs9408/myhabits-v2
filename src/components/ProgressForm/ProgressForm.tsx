import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContentText } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { useDispatch } from 'react-redux';
import { useIsAlertSnackBarSuccessOpen } from '../../utils/hooks/useIsAlertSnackBarSuccessOpen';
import { ProgressFormProps, TaskData } from '../../types';
import { post } from '../../Api';
import { tasksActions } from '../../store/tasks';

const ProgressForm = ({
  id,
  marks,
  index,
  currentDate,
  isFormOpen,
  setIsFormOpen,
}: ProgressFormProps) => {
  const dispatch = useDispatch();
  const { marksArray, min, max, defaultValue, description, isDone } = marks;

  const [, setIsAlertSnackBarOpen] = useIsAlertSnackBarSuccessOpen();

  const [value, setValue] = useState(defaultValue);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setIsFormOpen(!isFormOpen);
  };

  const fetchTargetData = (data: TaskData) => {
    const wayToDisableState = {
      index,
      disableValue: true,
    };

    post('/approveTask', JSON.stringify(data)).then(() => {
      setIsAlertSnackBarOpen(true);
      setIsFormOpen(!isFormOpen);
      dispatch(tasksActions.setDisabledState(wayToDisableState));
    });
  };

  return (
    <>
      <Dialog
        open={isFormOpen}
        onClose={() => {
          setIsFormOpen(!isFormOpen);
        }}
      >
        <DialogTitle>Выполнение цели</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
          <Slider
            valueLabelDisplay="auto"
            defaultValue={defaultValue}
            step={1}
            marks={marksArray}
            min={min}
            max={max}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => fetchTargetData({ id, value, isDone, currentDate })}
          >
            Подтвердить
          </Button>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProgressForm;
