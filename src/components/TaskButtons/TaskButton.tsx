import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ErrorIcon from '@material-ui/icons/Error';
import { useIsAlertSnackBarSuccessOpen } from '../../utils/hooks/useIsAlertSnackBarSuccessOpen';
import { tasksActions } from '../../store/tasks';
import { TaskData } from '../../types';
import { post } from '../../Api';
import UseStyles from './TaskButton.style';

type TaskButtonProperty = {
  currentDate: string;
  disabled: boolean;
  index: number;
  id: number;
  isPartiallyFormOpen: boolean;
  setIsPartiallyFormOpen: Dispatch<SetStateAction<boolean>>;
  isOverDoneFormOpen: boolean;
  setIsOverDoneFormOpen: Dispatch<SetStateAction<boolean>>;
};

const TaskButton = ({
  id,
  currentDate,
  disabled,
  index,
  isPartiallyFormOpen,
  setIsPartiallyFormOpen,
  isOverDoneFormOpen,
  setIsOverDoneFormOpen,
}: TaskButtonProperty) => {
  const classes = UseStyles();
  const dispatch = useDispatch();

  const [, setIsAlertSnackBarOpen] = useIsAlertSnackBarSuccessOpen();

  const fetchTargetData = (data: TaskData) => {
    const wayToDisableState = {
      index,
      disableValue: true,
    };

    post('/approveTask', JSON.stringify(data)).then(() => {
      setIsAlertSnackBarOpen(true);
      dispatch(tasksActions.setDisabledState(wayToDisableState));
    });
  };

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
            currentDate,
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
        onClick={() => {
          setIsPartiallyFormOpen(!isPartiallyFormOpen);
        }}
      >
        <Typography className={classes.partiallyDone}>Частично</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        disabled={disabled}
        startIcon={<DoneOutlineIcon className={classes.doneOutlineIcon} />}
        onClick={() => {
          setIsOverDoneFormOpen(!isOverDoneFormOpen);
        }}
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
            currentDate,
          })
        }
      >
        <Typography>Не выполнено</Typography>
      </Button>
    </>
  );
};

export default TaskButton;
