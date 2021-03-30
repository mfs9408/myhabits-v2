import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { LinearProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Template from '../../components/Template';
import { initializePageAndLoad, useSelector } from '../../store';
import { isAppInitializedActions } from '../../store/isAppInitialized';
import { fetchTasksForEditing } from '../../store/tasksForEditing/asyncAction';
import NoTasksAndAchievements from '../../components/NoTasksAndAchievements';
import useStyles from './EditPage.style';
import CardForEditing from '../../components/CardForEditing';

const EditPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isAppInitialized = useSelector(state => state.isAppInitialized);
  const tasks = useSelector(state => state.tasksForEditing);

  useEffect(() => {
    dispatch(initializePageAndLoad(fetchTasksForEditing()));

    return () => {
      dispatch(isAppInitializedActions.setIsAppInitialized());
    };
  }, [dispatch]);

  if (!isAppInitialized) return <LinearProgress />;
  if (!tasks) return null;
  if (tasks.length === 0) {
    return (
      <NoTasksAndAchievements
        header="Редактируйте ваши цели!"
        body="У вас ещё нет задач. Создайте их и дерзайте!"
      />
    );
  }

  return (
    <Template>
      <Typography variant="h4" align="center" className={classes.typography}>
        Редактор заданий
      </Typography>
      {tasks.map(({ ...task }, index) => (
        <CardForEditing key={index} {...task} />
      ))}
    </Template>
  );
};

export default EditPage;
