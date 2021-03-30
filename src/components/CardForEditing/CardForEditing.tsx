import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './CardForEditing.style';
import { EditingTask } from '../../types';

const CardForEditing = ({ imgUrl, name, type, description }: EditingTask) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={10} md={11} spacing={1} className={classes.root}>
      <Paper className={classes.root}>
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
          <Grid container item xs={12} sm={12} md={6} lg={6} direction="column">
            <Typography gutterBottom variant="h6" align="left">
              {name}
            </Typography>
            <Typography>Описание: {description}</Typography>
            <Typography>Тип цели: {type}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default CardForEditing;
