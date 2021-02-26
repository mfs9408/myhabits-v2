import React, { PropsWithChildren, useEffect } from 'react';
import MuiDrawer from '@material-ui/core/Drawer';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { useIsSideBarOpen } from '../../utils/hooks/useIsSideBarOpen';
import UseStyles from './Drawer.style';

interface OtherProps {}

export type DrawerProps = PropsWithChildren<OtherProps>;

const Drawer = ({ children }: DrawerProps) => {
  const classes = UseStyles();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const [open, setOpen] = useIsSideBarOpen();

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, [isXs, setOpen]);

  return (
    <MuiDrawer
      variant={isXs ? 'temporary' : 'permanent'}
      open={open}
      onClose={toggleOpen}
      classes={{
        paper: classes.drawer,
      }}
    >
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
