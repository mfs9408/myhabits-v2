import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import UseStyles from './MainMenu.style';
import AvatarBox from '../AvatarBox/AvatarBox';

const MainMenu = () => {
  const classes = UseStyles();

  return (
    <>
      <List className={classes.list}>
        <Link to="/tasks" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography>Задания</Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/success" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography>Успехи</Typography>
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <AvatarBox />
    </>
  );
};

export default MainMenu;
