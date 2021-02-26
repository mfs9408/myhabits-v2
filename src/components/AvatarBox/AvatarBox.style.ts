import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    gridAvatar: {
      flexGrow: 1,
    },
    input: {
      display: 'none',
    },
    typography: {
      background: 'none',
      marginTop: theme.spacing(2),
    },
  })
);
