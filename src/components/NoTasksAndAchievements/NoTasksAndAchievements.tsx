import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Template from '../Template';
import useStyles from './NoTasksAndAchievements.style';
import NewTaskButton from '../NewTaskButton';

type NoTasksAndAchievementsProps = {
  header: string;
  body: string;
};

const NoTasksAndAchievements = ({
  header,
  body,
}: NoTasksAndAchievementsProps) => {
  const classes = useStyles();

  return (
    <Template>
      <Typography display="block" variant="h4" className={classes.typography}>
        {header}
      </Typography>
      <Grid container justify="center" className={classes.grid}>
        <Typography>{body}</Typography>
      </Grid>
      <NewTaskButton />
    </Template>
  );
};

export default NoTasksAndAchievements;
