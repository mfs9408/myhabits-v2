import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import overDoneMarksData from '../ProgressForm/helpers/overDoneMarksData';
import partiallyMarksData from '../ProgressForm/helpers/partiallyMarksData';
import TaskButton from '../TaskButtons/TaskButton';
import AlertSnackBar from '../AlertSnackBar';
import { TaskResponse } from '../../types';
import ProgressForm from '../ProgressForm';
import UseStyles from './Task.style';

type TaskProperty = TaskResponse & {
  index: number;
};

const Task = ({
  id,
  name,
  description,
  imgUrl,
  quantity,
  measure,
  disabled,
  index,
}: TaskProperty) => {
  const classes = UseStyles();

  const date = new Date();
  const currentDate = date.toISOString();

  const [isPartiallyFormOpen, setIsPartiallyFormOpen] = useState<boolean>(
    false
  );
  const [isOverDoneFormOpen, setIsOverDoneFormOpen] = useState<boolean>(false);
  return (
    <>
      <Grid item xs={12} sm={10} md={11} className={classes.paperContainer}>
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid
              item
              container
              justify="center"
              alignItems="flex-start"
              xs={12}
              md={2}
              lg={2}
            >
              <img src={imgUrl} alt="картинка" className={classes.img} />
            </Grid>
            <Grid
              item
              container
              direction="column"
              xs={12}
              sm={12}
              md={6}
              lg={7}
            >
              <Typography
                variant="h6"
                align="left"
                className={classes.typography}
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                className={classes.typographyDescription}
              >
                {description}
              </Typography>
              <Typography
                variant="body2"
                className={classes.typographyMeasurement}
              >
                Длительность: {quantity} {measure}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <TaskButton
                id={id}
                currentDate={currentDate}
                index={index}
                isPartiallyFormOpen={isPartiallyFormOpen}
                setIsPartiallyFormOpen={setIsPartiallyFormOpen}
                isOverDoneFormOpen={isOverDoneFormOpen}
                setIsOverDoneFormOpen={setIsOverDoneFormOpen}
                disabled={disabled}
              />
            </Grid>
          </Grid>
        </Paper>
        <AlertSnackBar text="Ваша оценка учтена" />
        <ProgressForm
          id={id}
          marks={partiallyMarksData}
          currentDate={currentDate}
          index={index}
          isFormOpen={isPartiallyFormOpen}
          setIsFormOpen={setIsPartiallyFormOpen}
        />
        <ProgressForm
          id={id}
          index={index}
          marks={overDoneMarksData}
          currentDate={currentDate}
          isFormOpen={isOverDoneFormOpen}
          setIsFormOpen={setIsOverDoneFormOpen}
        />
      </Grid>
    </>
  );
};

export default Task;
