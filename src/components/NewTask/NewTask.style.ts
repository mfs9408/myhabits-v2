import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    outerGrid: {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(5),
        paddingTop: theme.spacing(5),
      },
    },
    paper: {
      width: '100%',
      padding: theme.spacing(2),
    },
    grid: {
      marginBottom: theme.spacing(4),
    },
    textField: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(3),
      },
    },
  })
);
