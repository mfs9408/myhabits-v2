import { createStyles, makeStyles, Theme } from '@material-ui/core';

const drawerWidth = 240;

export default makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
    },
  })
);
