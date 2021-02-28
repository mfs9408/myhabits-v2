import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ErrorIcon from '@material-ui/icons/Error';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import UseStyles from './TaskButton.style';
import ProgressForm from '../ProgressForm/ProgressForm';
import PartiallyMarksArray from '../ProgressForm/helpers/PartiallyMarksArray';
import OverDoneMarksArray from '../ProgressForm/helpers/OverDoneMarksArray';
import { post } from '../../Api';
import { useIsOverDoneDialogOpen } from '../../utils/hooks/useIsOverDoneDialogOpen';
import { useIsPartiallyDoneDialogOpen } from '../../utils/hooks/useIsPartiallyDoneDialogOpen';

type TaskButtonProperty = {
  id: number;
  disabled: boolean;
};

const TaskButton = ({ id, disabled }: TaskButtonProperty) => {
  const classes = UseStyles();

  const [successAlert, setSuccessAlert] = useState<boolean>(false);
  const [enabledButtons, setEnabledButtons] = useState<boolean>(disabled);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessAlert(false);
  };

  const [, setIsPartiallyDoneDialogOpen] = useIsPartiallyDoneDialogOpen();
  const [, setIsOverDoneDialogOpen] = useIsOverDoneDialogOpen();

  const handleClickDialogOpen = (
    setIsDialogOpen: (newState: boolean) => void
  ) => {
    setIsDialogOpen(true);
  };

  const date = new Date();
  const currentDate = date.toLocaleDateString();

  return (
    <>
      <Snackbar
        open={successAlert}
        autoHideDuration={2500}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Ваша оценка учтена
        </Alert>
      </Snackbar>
      <Button
        type="submit"
        fullWidth
        startIcon={<CheckIcon color="primary" />}
        disabled={enabledButtons}
        onClick={() =>
          post('/approveTask', {
            id,
            isDone: 'Done',
            date: currentDate,
          }).then(() => {
            setSuccessAlert(true);
            setEnabledButtons(!enabledButtons);
          })
        }
      >
        <Typography>Выполнено</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        disabled={enabledButtons}
        startIcon={<MoodBadIcon className={classes.moodBadIcon} />}
        onClick={() => handleClickDialogOpen(setIsPartiallyDoneDialogOpen)}
      >
        <Typography className={classes.partiallyDone}>Частично</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        disabled={enabledButtons}
        startIcon={<DoneOutlineIcon className={classes.doneOutlineIcon} />}
        onClick={() => handleClickDialogOpen(setIsOverDoneDialogOpen)}
      >
        <Typography>Перевыполнено</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        disabled={enabledButtons}
        startIcon={<ErrorIcon className={classes.errorIcon} color="error" />}
        onClick={() =>
          post('/approveTask', {
            id,
            isDone: 'Fail',
            date: currentDate,
          }).then(response => console.log(response.data))
        }
      >
        <Typography>Не выполнено</Typography>
      </Button>
      <ProgressForm
        id={id}
        description="Отметьте на сколько процентов ваша цель была выполнена"
        isDone="partially"
        min={1}
        max={99}
        marks={PartiallyMarksArray}
        useIsDialogOpen={useIsPartiallyDoneDialogOpen}
        defaultValue={50}
        currentDate={currentDate}
      />
      <ProgressForm
        id={id}
        description="Отметьте на сколько процентов ваша цель была перевыполнена"
        isDone="overDone"
        min={101}
        max={200}
        marks={OverDoneMarksArray}
        useIsDialogOpen={useIsOverDoneDialogOpen}
        defaultValue={150}
        currentDate={currentDate}
      />
    </>
  );
};

export default TaskButton;
