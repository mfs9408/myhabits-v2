import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      paddingTop: theme.spacing(1),
    },
    grid: {
      padding: theme.spacing(2),
    },
  })
);
