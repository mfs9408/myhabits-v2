import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import UseStyles from './NewTaskButton.style';

const NewTaskButton = () => {
  const classes = UseStyles();
  return (
    <Link to="/tasks/add">
      <Fab color="primary" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Link>
  );
};

export default NewTaskButton;
