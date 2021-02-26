import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import UseStyles from './Task.style';
import TaskButton from '../TaskButtons/TaskButton';

const Task = ({ pass, name, description, imgUrl }) => {
  const classes = UseStyles();

  return (
    <>
      <Grid item xs={12} sm={10} md={11} className={classes.paperContainer}>
        <Paper className={classes.paper}>
          <Grid container justify="flex-start" spacing={1}>
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
                gutterBottom
                variant="h6"
                align="left"
                className={classes.typographyHeader}
              >
                {name}
              </Typography>
              <Typography
                id="description"
                variant="body2"
                className={classes.typographyDescription}
              >
                {description}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <TaskButton pass={pass} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Task;
