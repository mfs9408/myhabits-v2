import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    gridSideBar: {
      height: '100%',
    },
    gridLogo: {
      flexGrow: 1,
    },
    list: {
      flexGrow: 6,
    },
    link: {
      color: 'black',
      textDecoration: 'none',
    },
  })
);
