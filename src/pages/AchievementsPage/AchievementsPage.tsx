import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Template from '../../components/Template';
import AchievementsTable from '../../components/AchievementsTable/AchievementsTable';
import NewTaskButton from '../../components/NewTaskButton/NewTaskButton';
import useStyles from './AchievementsPage.style';
import { initializePageAndLoad, useSelector } from '../../store';
import { fetchAchievements } from '../../store/achievements/asyncAction';
import { isAppInitializedActions } from '../../store/isAppInitialized';
import NoTasksAndAchievements from '../../components/NoTasksAndAchievements';

const AchievementsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isAppInitialized = useSelector(state => state.isAppInitialized);
  const achievements = useSelector(state => state.achievements);

  useEffect(() => {
    dispatch(initializePageAndLoad(fetchAchievements()));

    return () => {
      dispatch(isAppInitializedActions.setIsAppInitialized());
    };
  }, [dispatch]);

  if (!isAppInitialized) return <LinearProgress />;
  if (!achievements) return null;
  if (achievements.length === 0)
    return (
      <NoTasksAndAchievements
        header="Ваши достижения"
        body="У вас ещё нет достижений. Создайте их и дерзайте!"
      />
    );

  return (
    <>
      <Template>
        <Typography display="block" variant="h4" className={classes.typography}>
          Ваши достижения
        </Typography>
        <AchievementsTable achievements={achievements} />
        <NewTaskButton />
      </Template>
    </>
  );
};

export default AchievementsPage;
