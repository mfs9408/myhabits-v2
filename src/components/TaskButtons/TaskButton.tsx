import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ErrorIcon from '@material-ui/icons/Error';
import ProgressForm from '../ProgressForm/ProgressForm';
import PartiallyMarksArray from '../ProgressForm/helpers/PartiallyMarksArray';
import OverDoneMarksArray from '../ProgressForm/helpers/OverDoneMarksArray';
import { useIsOverDoneDialogOpen } from '../../utils/hooks/useIsOverDoneDialogOpen';
import { useIsPartiallyDoneDialogOpen } from '../../utils/hooks/useIsPartiallyDoneDialogOpen';
import { useIsAlertSnackBarSuccessOpen } from '../../utils/hooks/useIsAlertSnackBarSuccessOpen';
import { tasksActions } from '../../store/tasks';
import { TaskData } from '../../types';
import { post } from '../../Api';
import UseStyles from './TaskButton.style';

type TaskButtonProperty = {
  id: number;
  disabled: boolean;
  index: number;
};

const TaskButton = ({ id, disabled, index }: TaskButtonProperty) => {
  const classes = UseStyles();
  const dispatch = useDispatch();

  const [, setIsAlertSnackBarOpen] = useIsAlertSnackBarSuccessOpen();
  const [, setIsPartiallyDoneDialogOpen] = useIsPartiallyDoneDialogOpen();
  const [, setIsOverDoneDialogOpen] = useIsOverDoneDialogOpen();

  const wayToDisableState = {
    index,
    disableValue: true,
  };

  const handleClickDialogOpen = (
    setIsDialogOpen: (newState: boolean) => void
  ) => {
    setIsDialogOpen(true);
  };

  const fetchTargetData = (data: TaskData) => {
    post('/approveTask', data).then(() => {
      setIsAlertSnackBarOpen(true);
      dispatch(tasksActions.setDisabledState(wayToDisableState));
    });
  };

  const date = new Date();
  const currentDate = date.toLocaleDateString();

  return (
    <>
      <Button
        type="submit"
        fullWidth
        startIcon={<CheckIcon color="primary" />}
        disabled={disabled}
        onClick={() =>
          fetchTargetData({
            id,
            isDone: 'Done',
            date: currentDate,
          })
        }
      >
        <Typography>Выполнено</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        disabled={disabled}
        startIcon={<MoodBadIcon className={classes.moodBadIcon} />}
        onClick={() => handleClickDialogOpen(setIsPartiallyDoneDialogOpen)}
      >
        <Typography className={classes.partiallyDone}>Частично</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        disabled={disabled}
        startIcon={<DoneOutlineIcon className={classes.doneOutlineIcon} />}
        onClick={() => handleClickDialogOpen(setIsOverDoneDialogOpen)}
      >
        <Typography>Перевыполнено</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        disabled={disabled}
        startIcon={<ErrorIcon className={classes.errorIcon} color="error" />}
        onClick={() =>
          fetchTargetData({
            id,
            isDone: 'Fail',
            date: currentDate,
          })
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
