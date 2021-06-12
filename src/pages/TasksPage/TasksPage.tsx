import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import Task from '../../components/Task/Task';
import Template from '../../components/Template';
import UseStyles from './TasksPage.style';
import NewTaskButton from '../../components/NewTaskButton/NewTaskButton';
import { initializePageAndLoad, useSelector } from '../../store';
import { TaskResponse } from '../../types';
import { fetchTasks } from '../../store/tasks/asyncAction';
import { isAppInitializedActions } from '../../store/isAppInitialized';
import NoTasksAndAchievements from '../../components/NoTasksAndAchievements';

const TasksPage = () => {
  const classes = UseStyles();
  const dispatch = useDispatch();

  const isAppInitialized = useSelector(state => state.isAppInitialized);
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(initializePageAndLoad(fetchTasks()));

    return () => {
      dispatch(isAppInitializedActions.setIsAppInitialized());
    };
  }, [dispatch]);

  if (!isAppInitialized) return <LinearProgress />;
  if (!tasks) return null;
  if (tasks.length === 0)
    return (
      <NoTasksAndAchievements
        header="Ваши задания"
        body="У вас ещё нет заданий. Создайте их и дерзайте!"
      />
    );

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
        {tasks.map((task: TaskResponse, index) => (
          <Task
            key={task.id}
            index={index}
            id={task.id}
            quantity={task.quantity}
            measure={task.measure}
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
