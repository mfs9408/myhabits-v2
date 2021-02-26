import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ErrorIcon from '@material-ui/icons/Error';
import UseStyles from './TaskButton.style';
import ProgressForm from '../ProgressForm/ProgressForm';
import PartiallyMarksArray from '../ProgressForm/PartiallyMarksArray';
import OverDoneMarksArray from '../ProgressForm/OverDoneMarksArray';

// @ts-ignore
const TaskButton = ({ pass }) => {
  const classes = UseStyles();

  const [openPartially, setOpenPartially] = useState(false);
  const handleClickOpenPartially = () => {
    setOpenPartially(true);
  };

  const [openOverDone, setOpenOverDone] = useState(false);
  const handleClickOpenOverDone = () => {
    setOpenOverDone(true);
  };

  const date = new Date();
  const currentDate = date.toLocaleDateString();

  return (
    <>
      <Button
        type="submit"
        fullWidth
        startIcon={<CheckIcon color="primary" />}
        onClick={() => console.log({ pass, isDone: 'Done', date: currentDate })}
      >
        <Typography>Выполнено</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        startIcon={<MoodBadIcon className={classes.moodBadIcon} />}
        onClick={handleClickOpenPartially}
      >
        <Typography className={classes.partiallyDone}>Частично</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        startIcon={<DoneOutlineIcon className={classes.doneOutlineIcon} />}
        onClick={handleClickOpenOverDone}
      >
        <Typography>Перевыполнено</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        startIcon={<ErrorIcon className={classes.errorIcon} color="error" />}
        onClick={() => console.log({ pass, isDone: 'Fail', date: currentDate })}
      >
        <Typography>Не выполнено</Typography>
      </Button>
      <ProgressForm
        pass={pass}
        description="Отметьте на сколько процентов ваша цель была выполнена"
        isDone="partially"
        min={1}
        max={99}
        marks={PartiallyMarksArray}
        open={openPartially}
        setOpen={setOpenPartially}
        defaultValue={50}
        currentDate={currentDate}
      />
      <ProgressForm
        pass={pass}
        description="Отметьте на сколько процентов ваша цель была перевыполнена"
        isDone="overDone"
        min={101}
        max={200}
        marks={OverDoneMarksArray}
        open={openOverDone}
        setOpen={setOpenOverDone}
        defaultValue={150}
        currentDate={currentDate}
      />
    </>
  );
};

export default TaskButton;
