import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import MUIAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../Logo';
import { useIsSideBarOpen } from '../../utils/hooks/useIsSideBarOpen';
import useStyles from './TemporaryAppBar.styles';

const TemporaryAppBar = () => {
  const classes = useStyles();
  const [open, setIsOpen] = useIsSideBarOpen();

  const toggleOpen = () => {
    setIsOpen(!open);
  };

  return (
    <MUIAppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={toggleOpen}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Logo />
      </Toolbar>
    </MUIAppBar>
  );
};

export default TemporaryAppBar;
