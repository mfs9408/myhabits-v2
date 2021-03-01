import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import Task from '../../components/Task/Task';
import Template from '../../components/Template';
import UseStyles from './TasksPage.style';
import NewTaskButton from '../../components/NewTaskButton/NewTaskButton';
import { initializeAppAndLoadTasks, useSelector } from '../../store';
import { TaskResponse } from '../../types';

const TasksPage = () => {
  const classes = UseStyles();
  const dispatch = useDispatch();

  const isAppInitialized = useSelector(state => state.isAppInitialized);

  useEffect(() => {
    dispatch(initializeAppAndLoadTasks());
  }, [dispatch]);

  const tasks = useSelector(state => state.tasks);

  if (!isAppInitialized) return <LinearProgress />;
  if (!tasks) return null;

  return (
    <>
      <Template>
        <Typography
          display="initial"
          variant="h4"
          className={classes.typography}
        >
          Задания
        </Typography>
        {tasks.map((task: TaskResponse, index: number) => (
          <Task
            key={task.id}
            index={index}
            id={task.id}
            name={task.name}
            description={task.description}
            imgUrl={task.imgUrl}
            disabled={task.disabled}
          />
        ))}
      </Template>
      <NewTaskButton />
    </>
  );
};

export default TasksPage;
