import React, { PropsWithChildren } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Drawer from '../Drawer';
import Logo from '../Logo';
import TemporaryAppBarAppBar from '../TemporaryAppBar';
import MainMenu from '../MainMenu/MainMenu';
import UseStyles from './Template.style';

interface OtherProps {}

type TemplateProps = PropsWithChildren<OtherProps>;

const Template = ({ children }: TemplateProps) => {
  const drawerWidth = 240;
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = UseStyles();

  return (
    <>
      <TemporaryAppBarAppBar />
      <Drawer>
        <Grid container justify="center" className={classes.grid}>
          <Logo />
        </Grid>
        <Divider />
        <MainMenu />
      </Drawer>
      <main
        style={{
          marginLeft: isXs ? 0 : drawerWidth,
          marginTop: isXs ? theme.spacing(9) : 0,
        }}
      >
        <Grid container justify="center">
          {children}
        </Grid>
      </main>
    </>
  );
};

export default Template;
